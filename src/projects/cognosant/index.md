---
title: Cognosant
permalink: /cognosant
---

## COGNOSANT

Cognosant is an automatic report generator and download client for use with IBM 
Cognos.  It was primarily developed for use by Arkansas Public Schools running
Cognos version 10, but is fully configurable and ***should*** work with other Cognos
installations.

#### Features
* Pulls live data from Cognos without the need to schedule reports ahead of time.
* Maintains a list of "Frequently Used" reports which can be downloaded with a
single click or command.
* Runs with a user-friendly graphical interface or silently from the command line.

#### Installation and System Requirements

While still currently in Pre-Release testing, the latest version of the Cognosant Installer for Windows is avaiable here:

<a href="https://github.com/scottorgan/cognosant/releases/download/v0.9.6857-beta/Cognosant_0.9.6857.msi" class="button">Download Cognosant.0.9.6857.msi</a>

Cognosant requires the Microsoft .NET framework version 4.6.1 or later (included
with Windows 10 version 1511 and newer)

#### Configuration

When running Cognosant for the first time, the initial configuration screen will
prompt for the following settings:  

* __Username__:  Your Cognos username. (i.e. 1234JDoe)  
* __Password__:  Your Cognos password.    
* __Web Address__:  The URL of your Cognos server.  
* __Data Source Name__:  This can be found in the browser address bar immediately
after logging in to Cognos.  (Example:  https://cognos.domain.com/SPI/SPI_To_CRN.asp?dsn=<span style="background-color: #FFFF00">YourDataSourceNameHere</span>&appver=4.08...)
* __Overwrite Report URL__:  This setting determines if Cognosant uses the Web Address
listed above instead of the IP address  or URL specified within the report's direct link.
This setting should normally be checked.

#### Adding a Report

Before adding a report to Cognosant, you will first need to ensure that it is 
properly configured within Cognos:  

1. Click the "Set Properties" icon next to the desired report.
    <p align="center" style="padding: 20px"><img src="/images/cognosant1.jpg" width="80%" /></p>
2. On the second tab (labeled either Report or Query) set the following options:
* Default Action -  Select "Run the report" to download live data from Cognos.
* Prompt Values - Click on "Set..." and specify the appropriate values.
* Optional - Check the "Override the default report options" box and set the report format as desired
* Click OK to save these settings and return to My Folders
    <p align="center" style="padding: 20px"><img src="/images/cognosant2.jpg" width="80%" /></p>
3. Click the "Set Properties" icon again next to the same report.
4. On the General tab, click the "View the search path, ID and URL" link.
    <p align="center" style="padding: 20px"><img src="/images/cognosant3.jpg" width="80%" /></p>
5. On the "View the search path, ID and URL" box, highlight and copy the entire "Default action URL"
    <p align="center" style="padding: 20px"><img src="/images/cognosant4.jpg" width="80%" /></p>
6. Close the "View the search path, ID and URL" box.  
_If desired, you can now return to the Report / Query tab and modify the "Default
action" and "Report options" settings.  Once the URL has been copied, those values
will not affect Cognosant.  However, any saved "Prompt values" must remain set in
order for Cognosant to function._
    <p style="padding-top: 20px">You are now ready to add the report to Cognosant</p>
7. In Cognosant, press the "Add Report" button.
8. In the "Add New Report" screen, press the "Paste" link to paste the copied
"Default action URL" into the URL box.
    <p align="center" style="padding: 20px"><img src="/images/cognosant5.jpg" width="60%" /></p>
9. In the "Save to" box, enter the location to save the downloaded reports.  If
you enter a directory path only, the Cognos report name will be used as the file
name.  You can also enter a complete path plus the filename to be used in place
of the Cognos report name.
    <p align="center" style="padding: 20px"><img src="/images/cognosant6.jpg" width="60%" /></p>
10. Click OK
11. Optional (but Recommended) Select the newlay added report and click "Download
Selected" to verify that the report downloads correctly.
    <p align="center" style="padding: 20px"><img src="/images/cognosant7.jpg" width="70%" /></p>

NOTE:  The "Enabled" checkbox determines whether or not the report is downloaded
when using the "Download All" command.  This allows you to keep reports in your
list without downloading them in every scheduled pull.

#### Command-Line / Scheduled Downloads

You can schedule downloads using the Windows Task Scheduler or script them in
PowerShell by using the command line version.

* To download all reports, run Cognosant.exe /all from the command prompt.
    <p align="center" style="padding: 20px"><img src="/images/cognosant8.jpg" width="75%" /></p>

* To download a single report, run Cognosant.exe _ReportName_ from the command
prompt. (Note: If the report name contains spaces, you must enclose the name in
quotation marks.  i.e. Cognosant.exe "Report Name" )
    <p align="center" style="padding: 20px"><img src="/images/cognosant9.jpg" width="75%" /></p>

NOTE:  Cognosant's settings are unique for each user, therefore any scheduled task
must be run under an appropriately configured user account.

<br />
<br />
<br />
<hr />
<small><i><b>Legal:</b> All product names and trademarks are the property of their respective owners and
are in no way associated nor affiliated with this project or website.</i></small>