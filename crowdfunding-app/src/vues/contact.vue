<template>
    <div>
        <div id="nav">
            <nav class="navbar navbar-inverse navbar-toggleable-lg fixed-top" role="navigation">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-brand"><img src="../img/logo-small.jpg" height="32" width="53"></div>
                    <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><router-link :to="{path: '/'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                            <li class="nav-item active"><router-link :to="{path: '/contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
                        </ul>
                        <span class="navbar-text col-12 col-lg-2">
                    <a data-toggle="modal" data-target="#loginModal">
                    <span class="fa fa-sign-in fa-lg"></span>
                    <span> Log in</span></a>
                </span>
                        <span class="navbar-text col-12 col-lg-2">
                    <a data-toggle="modal" data-target="#signupModal">
                    <span class="fa fa-user-plus fa-lg"></span>
                    <span> Sign up</span></a>
                </span>
                    </div>
                </div>
            </nav>
        </div>
        <header class="jumbotron">
            <div class="container">
                <div class="row row-header">
                    <div class="col-12 col-lg-6">
                        <h1>Catch your Dream</h1>
                        <p>Dream funding has hosted thousands of creative, civic and entrepreneurial projects from around the world and recently expanded to include young entrepreneurs ages 13 to 17 through partnerships with student organizations. </p>
                    </div>
                    <div class="offset-2 col-6 col-lg-4">
                        <img src="../img/logo.jpg" class="img-fluid" height="70%" width="70%">
                    </div>
                </div>
            </div>
        </header>
        <div id="body">
            <br>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-12">
                        <h3>Contact</h3>
                        <hr>
                    </div>
                </div>
                <div class="row row-content">
                <div class="col-12">
                    <h3>Location Information</h3>
                    <br>
                </div>
                <div class="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address style="font-size: 100%">
                        University of Canterbury<br>
                        Private Bag 4800, Christchurch 8140<br>
                        New Zealand<br>
                        <i class="fa fa-phone"></i>: +64 1234 5678<br>
                        <i class="fa fa-fax"></i>: +64 8765 4321<br>
                        <i class="fa fa-envelope"></i>:
                        <a href="mailto:ycu20@uclive.ac.nz">ycu20@uclive.ac.nz</a>
                        <br>
                        <br>
                    </address>
                    <div class="btn-group" role="group">
                        <a role="button" class="btn btn-primary" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
                        <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
                        <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 offset-sm-1">
                    <div id="map" style="width:400px;height:250px;">

                    </div>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div class="col-12 col-md-9">
                    <form>
                        <div class="form-group row">
                            <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="telnum" class="col-md-2 col-form-label">Contact. Tel</label>
                            <div class="col-5 col-sm-4 col-md-3">
                                <div class="input-group">
                                    <div class="input-group-addon">(</div>
                                    <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area Code">
                                    <div class="input-group-addon">)</div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-6 col-md-7">
                                <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="emailid" class="col-md-2 col-form-label">Email</label>
                            <div class="col-md-10">
                                <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="form-ckeck col-md-6 offset-md-2">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="approve" value="">
                                    <strong>May we contact you?</strong>
                                </label>
                            </div>
                            <div class="md-3 offset-md-1">
                                <select class="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                            <div class="col-md-10">
                                <textarea type="email" class="form-control" id="feedback" name="feedback" rows="12"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-md-2 col-md-10">
                                <button type="submit" class="btn btn-primary">
                                    Send FeedBack
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md">
                </div>
            </div>

        </div>
        </div>
        <div id="footer" class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-5 offset-1 col-lg-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><router-link :to="{path: '/'}"><span class="fa fa-home fa-lg"></span> &nbspHome</router-link></li>
                            <li><router-link :to="{path: '/about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
                            <li><router-link :to="{path: '/project'}"><span class="fa fa-list fa-lg"></span> &nbspProject</router-link></li>
                            <li><router-link :to="{path: '/contact'}"><span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>

                        </ul>
                    </div>
                    <div class="col-6 col-lg-5">
                        <h5>Post Address</h5>
                        <address>
                            University of Canterbury<br>
                            Private Bag 4800, Christchurch 8140<br>
                            New Zealand<br>
                            <i class="fa fa-phone fa-lg"></i> +64 1234 5678<br>
                            <i class="fa fa-fax"></i> +64 8765 4321<br>
                            <i class="fa fa-envelope"></i> <a href="mailto:ycu20@uclive.ac.nz">ycu20@uclive.ac.nz</a>
                        </address>
                    </div>
                    <div class="col col-lg align-self-center">
                        <div style="text-align: center">
                            <a class="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                            <a class="btn btn-social-icon" href="mailto:ycu20@uclive.ac.nz"><i class="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <p>© Copyright 2017 Dream Funding</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {

        data() {
            return {}
        },
        mounted: function () {
            this.myMap();
        },

        methods: {
            myMap() {
                var uluru = {lat: -43.523, lng: 172.584};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
            }
        }
    }

</script>

