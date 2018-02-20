How to deploy
---
Use required commands

    fab dev deploy
    fab dev deploy:migrate=True
    fab dev deploy:pip_install=True
    fab dev deploy:pip_install=True,migrate=True

Changelog
---
Release 1.3.38: c5c25d6ff2f339da8921fe89274764bc4e9063b4 - 2018-2-20
- handle 0 tags in the ekstep feed

Release 1.3.38: 76d100982c942fe8f46cf1efe25ddaece5beedf7 - 2018-1-30
- Process tags in ekstep feed (for FA)

Release 1.3.37: 29e558e867ba35bb55b9c55e4b046cd38e141cdc - 2018-1-23
- Updated school page to show stories from source=web

Release 1.3.36: 4576211001657994e0bb5c2f794bcf23171fc3ac - 2018-1-12
- Fixed relative paths in ekstep feeds processing

Release 1.3.35: 8fe21d18b00ab78243c1eb6e95b534e78033c297 - 2018-1-11
- Changed default "to" year of GKA dashboard to 2018

Release 1.3.34: 41d0f0b809f51f445ac650c9f0aed3c3b885611f - 2018-01-11
- add new bfc email ids

Release 1.3.33: 11fecf96ac8e2df73ace816f8c688172639c1c6d - 2018-01-06
- modify home page to fetch only konnectsms and mobile stories

Release 1.3.32: 27dc0fd304e57a2480930f16bbe7c318a40ad937 - 2018-01-05
- Ekstep feed changes for v3 feeds

Release 1.3.31: a9dd597199235590c0764921f8daed3f597deb3f - 2017-11-24
- Slack alerts for ILP Konnect (new program)

Release 1.3.30: 07a9ec0413337bd57e0eee7680d78e739e9effb1 - 2017-11-21
- allow only one phone per user (no more concatenated phones)
- handle blank school id in the sms (mark it invalid)

Release 1.3.29: 86b3a64b31fcd4b7e83ff59140165ac1ba4af2a8 - 2017-11-16
- Removed Nuepa from partners list

Release 1.3.28: 0d993ffca69ae9903b9fc36518cf0492544834e0 - 2017-11-14
- adding new gka question ids to concepts (impact of new gka content ids)

Release 1.3.27: 87fd15266aa8e4275ec1e33f7e588b3d1360bbc8 - 2017-11-10
 - Changes Boundary model ordering

Release 1.3.26: fd92a0df5ee5d640db474f905b0addd7a0cded67 - 2017-11-08
 - Konnect API end point updates

Release 1.3.25: ded3454a8c8f0646a7c7d6cb540bbee6992bacaa - 2017-11-07
 - Konnect API end point updates

Release 1.3.24: c1f48f731c4242b557b5feac57c2d22706474fce - 2017-11-07
 - Konnect API end point updates

Release 1.3.23: 0a654bc24c26ec415b4dd8c0e8b2ad663080b858 - 2017-11-07
 - New Konnect API endpoint

Release 1.3.22: af631e5501ed6f5fb1581884a06173e2544bbe47 - 2017-11-07
 - Mobile status view for Konnect app

Release 1.3.21: 36049ea389b87eda30d520ddb0ebf22bd92e5be0 - 2017-11-06
 - Stories' UserType model changes

Release 1.3.20: 0d814c62dcbce5c3eb3f874f5c0d38770df0a100 - 2017-11-04
 - New survey for Konnect GKA

Release 1.3.19: 3036a2734d57b8d91bfea4d2c1e5ff91808b0140 - 2017-09-21
 - Include school_id in response of image search

Release 1.3.18: 138731da3a92e517860b9409906f137848185e07 - 2017-09-20
 - Dise API JS - Change default years to 2015-16

Release 1.3.17: 4c4956d1dba5ebb6d4168691a3d94804e4c7e7e5 - 2017-09-20
 - Filters for Image story view
 - Strict permissions for story view

Release 1.3.16: 6ba650cb0e9dc4e9393754a52ab12b4a2c29fb81 - 2017-09-01
 - More Kannada translations

Release 1.3.15: 8b187eb5db06869ffeed5a4337005263c41b95bf - 2017-08-31
 - Konnect summary API endpoint now accepts date filters
 - Updated respondent type list in surveys

Release 1.3.14: 61149f31ebee501be3d1ddd8a85c204ba326beff - 2017-08-30
 - SMS Fixes

Release 1.3.13: 743819fe74095e7ea0f47ca720e5b92a84c8878a - 2017-08-30
 - Additional data for Konnect summary endpoint

Release 1.3.12: ea1faf1aa7ea0843c6d406409757ee7859c5cde6 - 2017-08-30
 - GKA dashboard fixes - select correct answers based on 'pass'

Release 1.3.11: cbef0e424b3c8d631b6077ea522bf1b8a9fb8869 - 2017-08-29
 - GKA dashboard fixes

Release 1.3.10: 60884a4bd9784c9092a2521b6d8ba4cd8c71cbe5 - 2017-08-29
 - GKA dashboard fixes

Release 1.3.9: 60827d16ea97d120dd8cf2d4716d1f8d67a61158 - 2017-08-29
  - Kannada translations for GKA monitoring survey

Release 1.3.8: dafa30899ee7d017bd6f102f268490ade2d9cbc1 - 2017-08-29
  - GKA dashboard - remove old concepts and map it to new ones
  
Release 1.3.7: bbe91ef230519edf50fd916d7b24d742e2af1707 - 2017-08-28
  - GKA dashboard improvements & bug fixes

Release 1.3.6: 1866aaa46d497fa87da70dd4031a5211242db115 - 2017-08-27
  - GKA dashboard improvements & bug fixes

Release 1.3.5: 0d87d242104089da923ac46348ef5694b93891c6 - 2017-08-27
  - New end poits for Konnect app
  -- Konnect summary API
  -- Konnect image API

Release 1.3.4: fd3385d606a39332958cb9b50a6dded5e8995609 - 2017-08-24
  - Konnect story sync endpoint gets image upload support

Release 1.3.3: 0361755e74a39ba72d504fe5d4edb1a2df401b1d - 2017-08-22
  - GKA dashboard improvements and bug fixes

Release 1.3.2: 16e2506ec7d57e6def28015334999922265302e3 - 2017-08-22
  - API bug fixes

Release 1.3.1: 3a0359c8bc9f944ab0875a900da6c004277f464f - 2017-08-20
  - Login API endpoint returns user_type in the json response

Release 1.3.0: f97db1d5d66521f587a43f77723c693306d14ed9 - 2017-08-19
  - Signup now checks for source
  - Signups from Konnect mobile app do not need a valid email id
  - New field user_type for User model

Release 1.2.13: b56c04b54cc6394b04d4ee5cf975d1705c6b795e - 2017-08-14
  - More GKA dashboard fixes

Release 1.2.12: 08213e18c31c1a8ac09a5a97e636c86cded300cc - 2017-08-14
  - More GKA dashboard fixes

Release 1.2.11: dad0573a5a8e4160726eebfb654eb183f3f3ac5b - 2017-08-14
  - Fixes for GKA dashboard (date filter, denominator changes etc)
  - SMS fixes

Release 1.2.10: 6ef53edc3d4a10c3a5fd26ae8c81e8c364a88618 - 2017-08-08
  - Fixes the children count for assessments bit.

Release 1.2.9: 5630bcb0c67d491d23c6a900c801d9135a6b4638 - 2017-08-03
  - Fixes for GKA dashboard date filters.

Release 1.2.8: 4d2d356428470c0320e8345903ce013d64cda6a3 - 2017-06-27
  - Fixes for GKA dashboard and SMS report generation.

Release 1.2.7: 2462e831899d117133287cd8b525a4c762b2c492 - 2017-06-26
  - Further fixes for the GKA dashboard.
  - Improvements the SMS report generation.

Release 1.2.6: 5aa544b9ee6126ea32a0b49ed5d97a57ba827c73 - 2017-06-21
  - Further fixes for the GKA dashboard.
  - Data migration for ekstep assessment question ids.

Release 1.2.5: 9b30197ead9ebd9861ab5a01d9cc17f0fac6db90 - 2017-06-18
  - Even further fixes for the GKA dashboard

Release 1.2.4: a6736c7e51f91a3a537c6fd32532bc1f1fae872b - 2017-06-15
  - Fixes the SMS report generation script and education volunteer parsing script.

Release 1.2.3: 6bb95f9d4df1ec8d2c91dd972bdfc8a08beed32c - 2017-06-12
  - Further fixes for the GKA dashboard and education volunteer parsing script.

Release 1.2.2: 5113c393e0a864ec990c700ebdc76236d8301b93 - 2017-06-12
  - Further fixes for the GKA dashboard

Release 1.2.1: 5c200fdae4ee627cd7eac42262cab225f033197b - 2017-06-09
  - Fixes for the GKA dashboard

Release 1.2: e28bf168deefb6cd4bc7b1cc9146497e15d4da83 - 2017-06-06
  - Implements the unified GKA dashboard.
  - Fixes the GP Contest data parsing script.
  - Generates the EkStep assessment and student models.
  - Maps all schools to corresponding programmes.
  - Implements script to add all the educational volunteers and map them to boundaries.
  - 'yadagiri' everywhere.
  - Makes sure appropriate titles are displayed alongside the data on the dashboard.
  - Few performance fixes.

Release 1.1.8: f108738de5ae744d4480cbdd5aac48ba2ca9c527 - 2017-04-27
  - Implements GP contest data parsing script.

Release 1.1.7: a738034e70ce11c8e841c20eafd65ae8e0693f07 - 2017-04-20
  - Frist cut of Elected Rep Reports in English only for 2014-15 DISE data.
  - Fixes to the Survey- Question group details end point.

Release 1.1.6: 08b66e9778f1c9edfa673a21a847cd93e9af6af1 - 2017-03-21
  - Fixes a bug in the SMS parsing view.

Release 1.1.5: b4c978bc52fb86ee32b1cdc5fb084ad9e91538f0 - 2017-02-28
  - Refactors and fixes the SMS parsing API views plus utility functions.

Release 1.1.4: ca7619fd63895ae50926a5d91aa565fdda137c03 - 2017-01-31
  - Updates the gka sms report script.

Release 1.1.3: 51844eab408d25590d7b760ba3e6129dc4eb1d37 - 2017-01-24
  - Fetches only the error messages instead of all messages.
  - Sorts all categories in the script.
  - Adds appropriate headings in the generated CSV.
  - Separates the logical and formatting errors.
  - Makes all error messages concise while generating the report.

Release 1.1.2: 884dec7e051633feef75f9fbb9f9a28e4fbc5190 - 2017-01-23
  - Implements the email functionality into the report generation script.
  - Elected_reps script modification.
  - Meeting report pdfs archival removal.

Release 1.1.1: a41255d2d3ada87445cf10da0e96a806716d3e67 - 2017-01-19
  - Implements the BFC and CRP weekly report generation script.
  - Fixes the gka sms parsing bugs.
  - Fixes the logic of checking logical errors.
  - Adds DISE data dump SQL.

Release 1.1.0: 7d36bbbf09b9412512a069a55dedf4cdd7bfcf9a - 2017-01-16
  - Implements the BFC and CRP SMS user classification.
  - Implements the script to generate weekly and monthlt GKA SMS reports.
  - Comments and User field on the IVRS State model.

Release 1.0.9: 9018fac49538bb79c5a217b2d2cda92ffa0731c5 - 2016-11-16
  - Added post_import.sh to run scripts after database is created
  - Corrected database reference in run_markpercentile.sh and run_gradepercentile.sh```
  - Updated readme on DB refresh from EMS to dubdubdub

Release 1.0.8: 02c199a6d52712a7785c45b85590af0fe697ed68 - 2016-11-15
  - Moves to mapbox base layer.
  - Fixes to user account creation script.

Release 1.0.7: 02c199a6d52712a7785c45b85590af0fe697ed68 - 2016-11-09
  - Fixes block search for particular user.
  - Implements the script to create user accounts from a csv.

Release 1.0.6: c20cbbc806e85711354b58a0f580eb0252374dd3 - 2016-11-03
  - Minor migration and queryset optimizations.
  - Mobile sync api endpoint fix.
  - Adds Raw Data field to State csv being downloaded.

Release 1.0.5: 2b76a02b2844c2947014b7a844663943b0de0d63 - 2016-10-30
  - Implements the script to populate pen and paper community data.
  - Endpoint fixes for syncing data to mobile.
  - Rewrites the IVRS/SMS code with proper DB tables and error handling.

Release 1.0.4: 7b63cb411ab5858c2cb3cf2c52600ea477c77a87 - 2016-09-14
  - Updates Boundary page to  API changes.
  - Updates the pen and paper data parsing script.

Release 1.0.3: 52f024d2c36c15f0374a1896a30843a9b61f40ea - 2016-09-06
  - Revamps the GKA SMS dashboard.
  - Fixes date range for the GKA SMS reports.
  - Implements the parser script for the pen and paper data.

Release 1.0.2: 4d9c24013eda0718a1e05c06db808ac0bc23ee5a - 2016-08-22
  - GKA SMS report generation script modifications
  - Returns the gka districts in the /meta endpoint while source=sms

Release 1.0.1: bf1c2b80d66c156ad236690260ca260e85a4642f - 2016-08-03
  - GKA SMS fixes
  - Admin-Panel API Call fixes and enhancements
  - GKA SMS pdf generation command with report lab

Release 1.0.0: d3fcfc1cf8964124238e19478b380b1a7fd4606c	- 2016-07-12
  - Implements the GKA SMS.
  - Implements the Mobile app sync endpoints.
  - PhantomJS trial code.
  - Boundary pages.
  - Advanced search enhancements.
  - KLP DISE matching script.
  - Implements basic version of translations.

Release 0.5.3: 90b86785af0339678ed1f7d7bd0fd5f40cfe426a - 2016-03-15
  - Added GKA Boundary filters and last call/story timestamp on the stories dashboard

Release 0.5.2: dc215c0166a6ec5bc876787c9d56309c96a9abdc - 2016-02-06
  - Updates the GKA dashboard

Release 0.5.1: 69ac04bf67428cabad41a9f6cd94a9610aa189d5 - 2016-02-06
  - Fixes version filtering on the meta endpoint

Release 0.5.0: d7c435eda95ce3a77d1ddc91bca3b811faa5ebe7 - 2016-02-06
  - Implements GKA V3.2

Release 0.4.2: daf347ebf2ab3f5d3cf9ee2a26c2c0ed931203b6 - 2016-01-12
  - Fixes the swig-filter bug.

Release 0.4.1: c939fff51d271e15ec78b3add885513b126ca1f4 - 2015-12-01
  - Squeezes in the anganwadi infrastructure API data within the boundary endpoint
  - Fixes a few bugs on scripts
  - Moves adhoc reports to production server

Release 0.4.0: e3913eb89b36d4c2823054dceb8b3b65af742abb - 2015-11-23
  - Merges and imports the Anganwadi infrastructure data

Release 0.3.12: 82f2ca7027fbd2ef09e39fead88b6430cfc49b9e - 2015-11-12
  - Marks all IVRS stories as verified

Release 0.3.11: 2dec0c69fbe0856e108b47d16fc3864a09ae4256 - 2015-11-11
  - Adds sanity check for New Mahiti IVRS
  - Fixes bugs on the fetchgkaivrs script

Release 0.3.10: 6151a64b59cd25e418beb84245aa04b46a8631a7 - 2015-11-11
  - Adds docs for existing IVRS infrastructure
  - Implements the admin functionality for exporting IVRS data within a date range
  - Removes the deprecated IVRS endpoints
  - Changes IVRS types
  - Implements the new MAHITI IVRS system
  - Moves all IVRS scripts from the stories app to the ivrs app
  - Adds Locality model

Release 0.3.9: 47a1d71fef122729cbc4c563d5db0d247c8a143a - 2015-10-10
  - Casts the Mahiti IVRS 1s and 0s to Yes and No before saving

Release 0.3.8: c1d875d508241a0657e81857dc6ee078b7b8f732 - 2015-10-09
  - Implements slack notifications for IVRS systems
  - Fixes a bug on the gkaivrs script
  - Adds district, block & cluster to the gka IVRS csv dumps

Release 0.3.7: 2ad45cdbad21666f1ec1f81e811ad0f91c2ae114 - 2015-24-15
  - Minor: fix DISE API end-point to point to prod
  - Minor removal of debugging statement

Release 0.3.6: 313a9cc437a86c8acd4ae7be80e6e2f9f015041b - 2015-09-15
  - Version 4 Community sheets

Release 0.3.5: 9e983c292efad55975945c5f29fe5ff6a618873a - 2015-09-10
  - IVRS fixes

Release 0.3.4: 4e9e58a6e10752f1042af57a5a82e2d5f62f0a70 - 2015-09-10
  - Fix bug of stories count on school page
  - Misc. IVRS

Release 0.3.3: a87a12439d5389ce9a1a3c959068efdb9d3204f1 - 2015-08-21
  - Minor changes to IVRS csv outputs

Release 0.3.2: 20d7bbf83ac6db08df2ded764bcf0b07a6386244 - 2015-08-17
  - Minor bugfix to IVRS
  - Changes to MP / MLA models (run mview.sql)
  - Text changes on data page

Release 0.3.1: 82a6dc65cd54491fc4f1ba937363b5b5db4056c7 - 2015-08-07
  - Date filters on stories page
  - Fix validations on SYS form
  - Boundary aggregations API
  - Misc. IVRS fixes
  - Coming soon page for status

Release 0.3.0: ae99bfc240b352108a84701227fb3fe8b8ca75af - 2015-07-19
  - Revamped SYS form
  - New IVRS app to talk to Exotel IVRS
  - Improve tests work-flow

Release 0.25: 9c220816f8055e37fb4ce469a69a66949fe8650e - 2015-05-18
  - Stories design changes
  - Assessment fixes
  - Cleanups to story import scripts

Release 0.24: ff2ee5d66c9729439512108ebaeb16385ebd1f39 - 2015-05-11
  - Minor - hide facilities, dont consider inactive schools in stories page

Release 0.23: 71c48f34fb08cba3aa6d12d2ffcc4e9f73f155b1 - 2015-05-10
  - Minor, see https://github.com/klpdotorg/dubdubdub/pull/502

Release 0.22: b8f372defb054cd8e95555c252fc3cd52e2bb375 - 2015-05-10
  - Import scripts for different SYS feedback formats
  - minor bugfixes

Release 0.21: 6bace7a8ee245b452ff90120824b96d28c8f67b2 - 2015-05-09
  - Minor bugfixes

Release 0.20: 510080ca879663f61ab5b63d4c86eee9c14ea036 - 2015-05-08
  - Data import scripts + updated data (13-14)
  - Stories imports + Stories API + Stories Dashboard Frontend
  - Assessment aggregation scripts and assessments
  - SDMC / BVS meeting PDFs

Release 0.14: 4c8fbca1b9617a5015f8b620ef53ec030d8cfda8
  - Front-end re-write + styleguide

Release 0.13: f0688aca75e84cd5c0626e2073057e87fc8135e0
  - Additional profile fields for organisations / users
  - Some CSS clean-ups and template corrections
  - IVRS data import scripts + API

Release 0.12:
  - Replaced all views with materialized views [psql mview.sql]
  - Installed dateutil and created fields in story model to replace string date and entered_timestamp. Fake the 0003 migration of stories app.
  - Migrated Story model to have created/Updated_at, fake 0003

Release 0.11: 906821fac3c8cb03db7c4c965885d4c182b9a0d3
  - Replaced grapelli with Django Suit [pip install django-suit]

Release 0.10: 5c0fc22cf27a4420893dd14021af3ab0b21e4726
  - Implement breadcrumbs
  - Various front-end fixes
  - Clean-up HTML

Release 0.9: a35c01f81f74a65bb7013148e61586e600ab3adb
  - Fix several front-end issues, see issue tracker

Release 0.8: 88a6a92017a87ed1a782c898f765ac84fd089f0f
  - Permanent URLs for compare state
  - Several front-end fixes

Release 0.7:
  - Cleaned up SYS data [run-sql sys_cleanup.sql]
  - Add color field to volunteer activity types [sql-migrate]
  - Fixed foreignkey to auth_users on django_admin_log [run-sql admin_log_fk_cleanup.sql]

Release 0.6.1: September 24: <FILL IT>
  - added mviews for lib data [run-sql materialized_views_sep24.sql]

Release 0.6: September 23: 3c229cb1beb9408ba03113eecd36a77b9d4caadf
  - Added Anganwadi db as MView [run-sql]
  - Re-model donation work-flow [sql-migrate]
  - Added stories [run-sql sys_new_schemas.sql]
  - More front-end polish.

Release 0.5.1: September 3: d94e37756b64cf8df2ff290b7ff97bc870e84269
  - Update to django 1.7 [pip-install]
  - Compare modals

Release 0.5:
  - Added materialized view for MDM agg [run-sql]

Release 0.4.1: August 31: 0a83b5ad5b0f9d9d8eaee841d234ad2bcc933818
  - Responsive fixes.

Release 0.4: August 31: 66b43577d76b4c5514ef7c7774a12ee78484b413
  - Added materialized view for inst coords and added index to facility_agg [run-sql]

Release 0.3.1: August 26: 048f9bc41fa80dc3d46038171e4a0ec329f35712
  - OmniSearch box on map page works
  - Optimize some point loading behaviour on map page
  - Set page title on marker popups

Release 0.3: August 25: f826aa24958f6150da974961a0ce1f921a323525
 - Updated Django version to 1.7c2 [pip-install]
 - Added django-compressor for js / css minification [pip-install]
 - Modified SchoolDetails Materialized View [run-sql]
 - Added materialized view for total students per class per year [run-sql]
 - Stabilized front-end framework.
 - Router methods, map layers and events.
 - School page with limited features.

Release 0.2: July 26: 5c28f9cbc1aad0d1653401c671285012fd6fa882
 - User auth working [run-sql auth_token.sql]
 - Password reset API working
 - Added `is_active` to User model [migrate]
 - Added organization logo [migrate]
 - Re-organize / shorten URLs for users / volunteers end-points
 - Fix bug with new User sign-up
 - Avoid cascade delete for models where it should not apply

Release 0.1: July 8: a2b96f76527cbb01a491ba4f69b3a2c0444756d1
 - All endpoints working
 - Added Swager UI for API doc
