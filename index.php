<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Browser capability detector</title>
    <script src="scripts/modernizr.js"></script>
</head>
<body>
<style type="text/css">
    .send-email {
        height: 36px;
        border: none;
        background: #008484;
        color: #FFF!important;
        padding: 5px 10px;
        margin: 0.5em 0;
    }
</style>

<div id="app-container">
    <div id="tool-introduction">
        <p>As part of our Digital Strategy, The National Archives is examining ways to streamline the process by which departments transfer digital records to us. One option could be a web-based service using established standards. To get a better understanding of departments’ current browser capabilities (e.g. support of HTML5 and JavaScript) we have prepared this web application which:</p>
        <ul>
            <li>uses JavaScript to detect features of your current browser</li>
            <li>presents this information to you</li>
            <li>provides a hyperlink that will allow you to send this information to us in a pre-populated email</li>
        </ul>
        <p>This information will be used solely for internal purposes to ensure we select browser technologies that will work for users in departments. The data will not be published, though we may share aggregate data with Government Digital Service to assist them in similar work.</p>
        <p>If you have any questions about the tool or encounter any difficulties, please email <a href="mailto:gwyn.jones@nationalarchives.gsi.gov.uk">Gwyn Jones</a>, Lead Front End Developer at The National Archives who is collating this information.</p>
    </div>

    <div id="app-output">
        <h2>Results</h2>
        <div id="javascript-unavailable">
            <p>We have detected that JavaScript is not available in your browser. Please click the link below to send this information to The National Archives</p>
            <p><a href="mailto:gwyn.jones@nationalarchives.gsi.gov.uk?subject=Browser%20Capability%20Survey&body=nojs" class="send-email">Send browser information to The National Archives</a></p>
        </div>
    </div>
</div>
<script src="scripts/jquery.1.12.4.local.js"></script>
<script src="scripts/app.min.js"></script>
</body>
</html>