/* vi:si:et:sw=4:sts=4:ts=4 */

'use strict';
(function() {
    var preschoolString = 'PreSchool';
    var schoolString = 'Primary School';

    klp.init = function() {
        klp.router = new KLPRouter();
        klp.router.init();
        loadQuestions('schoolString',[]);
        $('form').stepy({
            next: function(index) {
                var isValid = true;
                if (index == 2) {
                    //validate first step
                    isValid = validatePersonalDetails();
                }
                return isValid;
            }
        });
        initImageUploader();
        initializeUser();
        $('#sys_school').submit(function(e) {
            if (e) {
                e.preventDefault();
            }
            var $this = $(this);
            var dataArray = $this.serializeArray();
            var dataObj = {};
            _(dataArray).each(function(a) {
                dataObj[a.name] = a.value;
            });
            // var commentsChars = $('#comments_id').val().length;
            // if (commentsChars > 2000) {
            //     klp.utils.alertMessage("Comments field longer than allowed length. Please fix and try again.", "error");
            //     return;
            // }
            dataObj['images'] = getImagesData();
            console.log("data obj", dataObj);
            var schoolID = dataObj['id'];
            delete dataObj['id'];
            var postURL = "stories/" + schoolID;
            
            var $xhr = klp.api.do(postURL, dataObj, 'POST');
            klp.utils.startSubmit('sysForm');
            $xhr.done(function() {
                var tplSysThanks = swig.compile($('#tpl-sysThanks').html());
                var thanksHTML = tplSysThanks({'id': schoolID});
                $('.js-form-parent').html(thanksHTML);
            });
            $xhr.fail(function() {
                klp.utils.stopSubmit('sysForm');
                klp.utils.alertMessage("Failed submitting form. Please check errors and re-submit.", "error");
                $('#sys_school').stepy('step', 1);
            });
        });
    }

    function validatePersonalDetails() {
        var isValid = true;
        $('#sys_school-step-0').find('.required').each(function() {
            var $div = $(this);
            var $input = $div.find('input');
            if ($input.val() === '') {
                isValid = false;
                $input.addClass("error");
            } else {
                if ($input.hasClass("error")) {
                    $input.removeClass("error");
                }
            }
        });
        if (!isValid) {
            klp.utils.alertMessage("Please fill in all required fields before proceeding.", "error");
        }
        return isValid;
    }
    
    function loadQuestions(schoolType, params) {
        //var params = klp.router.getHash().queryParams;
        /*var detailURL = "sys/version/school";
        var $detailXHR = klp.api.do(detailURL, params);
        startDetailLoading(schoolType);
        $detailXHR.done(function(data) {*/
            
        //});
        var questions = {
            "academic":
            [
                {'question':'Was the school open?','id':1 },
                {'question':'Was the teacher present in each class?','id':2 },
                {'question':'Are there Sufficient number of class rooms?','id':17 },
                {'question':'Were at least 50% of the children enrolled present on the day you visited the school?','id':19 },
                {'question':'Is there a Separate office for Headmaster?','id':11 }
            ],
            "infra":
            [
                {'question':'Is there a Boundary wall/ Fencing?','id':8 },
                {'question':'Is there Accessibility to students with disabilities?','id':10 },
                {'question':'Is there a Play ground?','id':9 },
                {'question':'Are there Play Materials or Sports Equipments?','id':14 }
            ],   
            "hygiene":
            [            
                {'question':'Are all the toilets in the school functional?','id':4 },
                {'question':'Does the school have a separate functional toilet for girls?','id':5 },
                {'question':'Does the school have drinking water?','id':6 },
                {'question':'Is a Mid Day Meal served in the school?','id':7 },
                {'question':'Is there a Separate room as Kitchen / Store for Mid day meals?','id':12 }
            ],
            "learning":
            [
                {'question':'Is there Teaching and Learning material?','id':16 },
                {'question':'Is there a Library?','id':13 },
                {'question':'Is there a Designated Librarian/Teacher?','id':15 }
                
            ]              
        };
        var tplSysSchool = swig.compile($('#tpl-sysSchool').html());  
        var table_start =  '<table class="table-base table-list-view table-base-sys">' +
                    '<tbody><tr class="table-base-heading">' +
                    '<th class="grey-silver">Just a few questions more...</th>' +
                    '<th></th>' +
                    '<th></th>' +
                    '<th></th>' +
                    '</tr>';
        var table_end = '</tbody></table>';

        var html = table_start + tplSysSchool({'questions':questions["academic"]}) + table_end;      
        $('#sysqset1_school').html(html);
        html = table_start + tplSysSchool({'questions':questions["infra"]}) + table_end;      
        $('#sysqset2_school').html(html);
        html = table_start + tplSysSchool({'questions':questions["hygiene"]}) + table_end;      
        $('#sysqset3_school').html(html);
        html = table_start + tplSysSchool({'questions':questions["learning"]}) + table_end;      
        $('#sysqset4_school').html(html);
    }

    function initializeUser() {
        if (klp.auth.getToken()) {
            klp.api.authDo("users/profile").done(function(data) {
                $('#name_id').val(data.first_name + " " + data.last_name);
                $('#email_id').val(data.email);
                $('#telephone_id').val(data.mobile_no);
            });
        }
    }

    function initImageUploader() {
        var MAX_IMAGES = 5;
        var dropZone = $('#images_dropzone').get(0);
        dropZone.addEventListener("dragenter", function(e) { e.stopPropagation(); e.preventDefault(); return false; }, false);
        dropZone.addEventListener("dragover", function(e) { e.stopPropagation(); e.preventDefault(); return false; }, false);
        dropZone.addEventListener("drop", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var files = e.dataTransfer.files;
            for (var i=0; i<files.length; i++) {
                var fil = files[i];
                console.log(fil);
                addImagePreview(fil);
            }
        });
        $('#multiImageUpload').change(function(e) {
            var t = this;
            var currentImageCount = $('.js-image-preview').length;
            for (var i=0; i<t.files.length; i++) {
                if (currentImageCount >= MAX_IMAGES) {
                    klp.utils.alertMessage("Cannot add more than " + MAX_IMAGES + " images.", "error");
                    break;
                }
                var f = t.files[i];
                addImagePreview(f);
                currentImageCount++;
            }
        });
    }

    function addImagePreview(image) {
        if (!image.type.match('image.*')) {
            return;
        }

        var reader = new FileReader();
        var resizeOptions = {
            'maxWidth': 800,
            'maxHeight': 600
        };
        reader.onload = (function(imageFile) {
            return function(e) {
                resizeImage(e.target.result, resizeOptions, function(resizedImage) {
                    var $img = $('<img />')
                                .prop("height", "100")
                                .prop("width", "100")
                                .addClass('js-image-preview')
                                .addClass('image-preview')
                                .attr("src", resizedImage)
                                .appendTo('#imagePreviews');
                    $img.click(function(e) {
                        if (confirm("Do you wish to remove this image?")) {
                            $(this).remove();
                        }
                    });
                });

            };
        })(image);  
        reader.readAsDataURL(image);
    }

    function resizeImage(imageDataURI, options, callback) {
        var opts = $.extend({
            'maxWidth': 800,
            'maxHeight': 600
        }, options);
    var tempImg = new Image();
    tempImg.src = imageDataURI;
    tempImg.onload = function() {
 
        var MAX_WIDTH = opts.maxWidth;
        var MAX_HEIGHT = opts.maxHeight;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        callback(dataURL);
      }
    }

    function getImagesData() {
        var images = [];
        $('.js-image-preview').each(function() {
            var src = $(this).attr('src');
            if (src) {
                images.push(src);
            }
        });
        return images;
    }

})();