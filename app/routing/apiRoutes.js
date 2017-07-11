<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Friend Finder - Survey</title>
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- Font Awesome Glyphicons -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
    <link href='https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Rokkitt' rel='stylesheet' type='text/css'>
    <style>
    body {
        background-color: green;
        font-family: 'Rokkitt', serif;
        background-image: url(http://www.publicdomainpictures.net/pictures/60000/velka/geometric-wallpaper-pattern-orange.jpg);        
        height: 100%;
        width: 100%;
        background-color: #d4d4d4;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    
    .content {
        background-color: white;
        padding: 10px;
    }
    
    .select {
        border-radius: 4px;
        padding: 6px 12px;
    }
    
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    
    a,
    a:hover {
        color: black;
    }
    
    .one {
        font-weight: bold;
        color: #4b2426;
        font-family: 'Waiting for the Sunrise', cursive;
    }
    
    .two {
        font-weight: bold;
        color: #4b2426;
        font-family: 'Waiting for the Sunrise', cursive;
    }

    .footer {
        padding: 10px;
                color: #4b2426;
    }

        .btn {
        background-color: #4b2426;
        border: none;
        color: white;
    }
    
    .btn:hover {
        background-color: #5c2c2f;
    }

    </style>
</head>

<body>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1 content img-rounded">
                <h2 class="one col-md-offset-1">About You</h2>
                <div class="form-group row">
                    <label for="name" class="col-md-1 col-form-label text-right col-md-offset-1">
                        <h4>Name:</h4></label>
                    <div class="col-md-3">
                        <input class="form-control" type="text" value="" id="name">
                    </div>
                    <label for="photo" class="col-md-3 col-form-label text-right">
                        <h4>Link to Photo Image:</h4></label>
                    <div class="col-md-3">
                        <input class="form-control" type="text" value="" id="photo">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-1 col-form-label text-right col-md-offset-1">
                        <h4>Email:</h4></label>
                    <div class="col-md-3">
                        <input class="form-control" type="text" value="" id="email">
                    </div>
                    <label for="photo" class="col-md-3 col-form-label text-right">
                        <h4>Current Location:</h4></label>
                    <div class="col-md-3">
                        <input class="form-control" type="text" value="" id="location">
                    </div>
                </div>
                <hr>
                <div class="col-md-5 col-md-offset-1">
                    <h3 class="one">Question 1</h3>
                    <h4>Do you ever dance even if there's no music playing?</h4>
                    <select class="select" id="q1">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (No Way)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Absolutely)</option>
                    </select>
                    <h3 class="one">Question 3</h3>
                    <h4>Do you always smile for pictures?</h4>
                    <select class="select" id="q2">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Never)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Of Course, Yes)</option>
                    </select>
                    <h3 class="one">Question 5</h3>
                    <h4>Can you change the oil on a car?</h4>
                    <select class="select" id="q3">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Not Possible)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Yes)</option>
                    </select>
                    <h3 class="one">Question 7</h3>
                    <h4>Are you lazy?</h4>
                    <select class="select" id="q4">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Not at all)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (True)</option>
                    </select>
                    <h3 class="one">Question 7</h3>
                    <h4>Is Christmas stressful?</h4>
                    <select class="select" id="q5">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (No)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Indeed)</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <h3 class="one">Question 2</h3>
                    <h4>Ever have a Deja-vu feeling?</h4>
                    <select class="select" id="q6">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Strongly Disagree)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Affirmative)</option>
                    </select>
                    <h3 class="one">Question 4</h3>
                    <h4>Can you curl your tongue?</h4>
                    <select class="select" id="q7">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (False)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Certainly)</option>
                    </select>
                    <h3 class="one">Question 6</h3>
                    <h4>Can you swim well?</h4>
                    <select class="select" id="q8">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Disagree)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Right)</option>
                    </select>
                    <h3 class="one">Question 8</h3>
                    <h4>Do you cry and throw a fit until you get your own way?</h4>
                    <select class="select" id="q9">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Absolutely Not)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Yeah)</option>
                    </select>
                    <h3 class="one">Question 10</h3>
                    <h4>Ever won a spelling bee?</h4>
                    <select class="select" id="q10">
                        <option value="" disabled selected>Select an Option</option>
                        <option value="1">1 (Absolutely Not)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Aye)</option>
                    </select>
                    <br>
                    <br>
                    <!-- Submit Button -->
                    <div class="text-right">
                    <button type="submit" class="btn btn-info btn-lg text-right one" id="submit">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer text-right">
        <div class="container">
            <p><a href="/api/friends">API Friends List</a> | <a target="_blank" href="https://github.com/kjgum/friendFinder">GitHub Repo</a></p>
        </div>
    </footer>
    </div>
    </div>
    </div>
    <!-- Modal -->
    <div id="resultsModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h2 class="modal-title">Best Match</h2>
                </div>
                <div class="modal-body">
                    <h2 id="matchName"></h2>
                    <h3 id="matchLocation"></h3>
                    <h3 id="matchEmail"></h3>
                    <img id="matchImg" src="" alt="">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder;
            var point = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            geocoder.geocode({
                'latLng': point
            }, function(locations, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    for (var location of locations) {
                        if ($.inArray('locality', location.types) != -1) {
                            $('#location').val(location.formatted_address);
                            break;
                        }
                    };
                }
            });
        });
    }


    // Capture the form inputs 
    $("#submit").on("click", function() {

        // Form validation
        function validateForm() {
            var isValid = true;
            $('.form-control').each(function() {
                if ($(this).val() === '')
                    isValid = false;
            });

            $('.select').each(function() {

                if ($(this).val() === null)
                    isValid = false
            })
            return isValid;
        }

        // If all required fields are filled
        if (validateForm() == true) {
            // Create scores array
            var q = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            var scores = [];
            for (var i in q) {
                var val = $('#q' + q[i]).val();
                scores.push(val)
            }
            // Create an object for the user's data
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                location: $("#location").val(),
                email: $('#email').val(),
                scores: scores
            }

            // Grab the URL of the website
            var currentURL = window.location.origin;

            // AJAX post the data to the friends API. 
            $.post(currentURL + "/api/friends", userData, function(data) {

                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $('#matchName').text(data.name);
                $('#matchLocation').text(data.location);
                $('#matchEmail').text(data.email);

                $('#matchImg').attr("src", data.photo);

                // Show the modal with the best match 
                $("#resultsModal").modal('toggle');

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }

        return false;
    });
    </script>
</body>

</html>