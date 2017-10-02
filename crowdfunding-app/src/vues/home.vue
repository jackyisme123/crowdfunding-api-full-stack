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
                    <li class="nav-item active"><router-link :to="{path: './'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                    <li class="nav-item"><router-link :to="{path: './about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                    <li class="nav-item"><router-link :to="{path: './project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                    <li class="nav-item"><router-link :to="{path: './contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
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
    <div id="body">body</div>
    <div id="footer" class="footer">
        <div class="container">
        <div class="row">
            <div class="col-5 offset-1 col-lg-2">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><router-link :to="{path: './'}"><span class="fa fa-home fa-lg"></span> &nbspHome</router-link></li>
                    <li><router-link :to="{path: './about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
                    <li><router-link :to="{path: './project'}"><span class="fa fa-list fa-lg"></span> &nbspProject</router-link></li>
                    <li><router-link :to="{path: './contact'}"><span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>

                </ul>
            </div>
            <div class="col-6 col-lg-5">
                <h5>Post Address</h5>
                <address>
                    University of Canterbury
                    Private Bag 4800, Christchurch 8140
                    New Zealand<br>
                    <i class="fa fa-phone fa-lg"></i> +852 1234 5678<br>
                    <i class="fa fa-fax"></i> +852 8765 4321<br>
                    <i class="fa fa-envelope"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
                </address>
            </div>
            <div class="col col-lg align-self-center">
                <div style="text-align: center">
                    <a class="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                    <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
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
        <!-- login model -->
        <div id="loginModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg" role="content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Login </h4>
                        <button type="button" class="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-inline">
                            <div class="form-group">
                                <label class="sr-only" for="loginInputUsername">Username</label>
                                <input type="text" class="form-control form-control-sm mr-1" id="loginInputUsername" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="loginInputPassword3">Password</label>
                                <input type="password" class="form-control form-control-sm mr-1" id="loginInputPassword3" placeholder="Password">
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"> Remember me
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary btn-sm">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- signup model -->
        <div id="signupModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg" role="content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Sign Up</h4>
                        <button type="button" class="close" data-dismiss="modal" @click="default_signup_modal()">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="register_form">
                            <div class="form-group row">
                                <label class="sr-only" for="signupInputUsername">Username</label>
                                <input type="text" class="form-control form-control-sm offset-1 col-6" id="signupInputUsername" placeholder="Username" v-model="sign_username" @mouseleave="check_sign_username()">
                                <span style="color: red">*</span>
                                <span class="col" id="username_msg" v-bind:style="{color:username_msg_color}">{{sign_username_msg}}</span>
                            </div>
                            <div class="form-group row">
                                <label class="sr-only" for="signupEmail">Email</label>
                                <input type="email" class="form-control form-control-sm offset-1 col-6" id="signupEmail" placeholder="Email" v-model="sign_email" @mouseleave="check_sign_email()">
                                <span style="color: red">*</span>
                                <label class="col" id="email_msg" v-bind:style="{color:email_msg_color}">{{sign_email_msg}}</label>
                            </div>
                            <div class="form-group row">
                                <label class="sr-only" for="signupInputPassword">Password</label>
                                <input type="password" class="form-control form-control-sm offset-1 col-6" id="signupInputPassword" placeholder="Password" v-model="sign_pwd" @mouseleave="check_sign_pwd()">
                                <span style="color: red">*</span>
                                <label class="col" id="pwd_msg" v-bind:style="{color:pwd_msg_color}">{{sign_pwd_msg}}</label>
                            </div>
                            <div class="form-group row">
                                <label class="sr-only" for="signupInputPassword2">Confirm Password</label>
                                <input type="password" class="form-control form-control-sm offset-1 col-6" id="signupInputPassword2" placeholder="Confirm Password" v-model="sign_confirmpwd " @mouseleave="confirm_sign_pwd()">
                                <span style="color: red">*</span>
                                <label class="col" id="confirmpwd_msg" v-bind:style="{color:confirmpwd_msg_color}">{{sign_confirmpwd_msg}}</label>
                            </div>
                            <div class="form-group row">
                                <label class="sr-only" for="signupLocation">Location</label>
                                <input type="text" class="form-control form-control-sm offset-1 col-9" id="signupLocation" placeholder="Location" v-model="sign_location" @mouseleave="check_sign_location()">
                                <label class="col" id="location_msg" v-bind:style="{color:location_msg_color}">{{sign_location_msg}}</label>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <div style="color:red">{{error_msg}}</div>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_signup_modal()">Cancel</button>
                        <button type="button" class="btn btn-primary btn-sm" @click="register()">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                sign_username:'',
                sign_email: '',
                sign_pwd:'',
                sign_confirmpwd:'',
                sign_location:'',
                username_msg_color:'black',
                sign_username_msg:'Enter username',
                email_msg_color:'black',
                sign_email_msg:'Enter email address',
                pwd_msg_color:'black',
                sign_pwd_msg:'Enter password',
                confirmpwd_msg_color:'black',
                sign_confirmpwd_msg:'Confirm password',
                location_msg_color:'black',
                sign_location_msg:'Location',
                flag_username:false,
                flag_email:false,
                flag_pwd:false,
                flag_confirmpwd:false,
                error_msg:''
            }
        },
        methods: {
            //same username check
            check_sign_username (){
                if(this.sign_username == ''){
                    this.username_msg_color='red';
                    this.sign_username_msg =' Username cannot be empty';
                    document.getElementById("username_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_username=false;
                }else{
                    this.username_msg_color='green';
                    this.sign_username_msg ='';
                    document.getElementById("username_msg").className ='col fa fa-check';
                    this.flag_username=true;
                }

            },
            //email format check
            check_sign_email(){
                if(this.sign_email == ''){
                    this.email_msg_color='red';
                    this.sign_email_msg =' Email address cannot be empty';
                    document.getElementById("email_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_email=false;
                }else{
                    this.email_msg_color='green';
                    this.sign_email_msg ='';
                    document.getElementById("email_msg").className ='col fa fa-check';
                    this.flag_email=true;
                }
            },
            check_sign_pwd(){
                if(this.sign_pwd == ''){
                    this.pwd_msg_color='red';
                    this.sign_pwd_msg =' Password cannot be empty';
                    document.getElementById("pwd_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_pwd=false;
                }else if(this.sign_confirmpwd == this.sign_pwd){
                    this.pwd_msg_color='green';
                    this.sign_pwd_msg ='';
                    document.getElementById("pwd_msg").className ='col fa fa-check';
                    this.flag_pwd=true;
                    this.confirmpwd_msg_color='green';
                    this.sign_confirmpwd_msg ='';
                    document.getElementById("confirmpwd_msg").className ='col fa fa-check';
                    this.flag_confirmpwd=true;
                }else if(this.sign_confirmpwd == ''){
                    this.pwd_msg_color='green';
                    this.sign_pwd_msg ='';
                    document.getElementById("pwd_msg").className ='col fa fa-check';
                    this.flag_pwd=true;
                    this.flag_confirmpwd=false;
                }else{
                    this.pwd_msg_color='green';
                    this.sign_pwd_msg ='';
                    document.getElementById("pwd_msg").className ='col fa fa-check';
                    this.flag_pwd=true;
                    this.confirmpwd_msg_color='red';
                    this.sign_confirmpwd_msg =' Confirm password must be same';
                    document.getElementById("confirmpwd_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_confirmpwd=false;
                }
            },
            confirm_sign_pwd(){
                if(this.sign_confirmpwd == ''){
                    this.confirmpwd_msg_color='red';
                    this.sign_confirmpwd_msg =' Password cannot be empty';
                    document.getElementById("confirmpwd_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_confirmpwd=false;
                }else if(this.sign_confirmpwd != this.sign_pwd){
                    this.confirmpwd_msg_color='red';
                    this.sign_confirmpwd_msg =' Confirm password must be same';
                    document.getElementById("confirmpwd_msg").className ='col fa fa-exclamation-triangle';
                    this.flag_confirmpwd=false;
                }else{
                    this.confirmpwd_msg_color='green';
                    this.sign_confirmpwd_msg ='';
                    document.getElementById("confirmpwd_msg").className ='col fa fa-check';
                    this.flag_confirmpwd=true;
                }
            },
            check_sign_location(){
                this.location_msg_color='green';
                this.sign_location_msg ='';
                document.getElementById("location_msg").className ='col fa fa-check';
            },
            default_signup_modal(){
                this.sign_username='';
                this.sign_email='';
                this.sign_pwd='';
                this.sign_confirmpwd='';
                this.sign_location='';
                this.username_msg_color='black';
                this.sign_username_msg='Enter username';
                this.email_msg_color='black';
                this.sign_email_msg='Enter email address';
                this.pwd_msg_color='black';
                this.sign_pwd_msg='Enter password';
                this.confirmpwd_msg_color='black';
                this.sign_confirmpwd_msg='Confirm password';
                this.location_msg_color='black';
                this.sign_location_msg='Location';
                document.getElementById("username_msg").className ='col';
                document.getElementById("email_msg").className ='col';
                document.getElementById("pwd_msg").className ='col';
                document.getElementById("confirmpwd_msg").className ='col';
                document.getElementById("location_msg").className ='col';
                this.flag_username=false;
                this.flag_email=false;
                this.flag_pwd=false;
                this.flag_confirmpwd=false;
                this.error_msg='';
            },
            register(){
                if(this.flag_username&&this.flag_email&&this.flag_pwd&&this.flag_confirmpwd==true){
                    this.$http.post('http://localhost:4941/api/v2/users',
                        {
                            "username": this.sign_username,
                            "email": this.sign_email,
                            "password": this.sign_confirmpwd,
                            "location": this.sign_location
                        }
                    ).then(function (res) {
                        this.default_signup_modal();
                        $("#signupModal").modal('hide');
                        //to login profile page
                    }),function (err) {
                        this.error_msg=err;
                    }
                }else{
                    this.error_msg='Wrong enter, please check sign up information';
                }
            }

        }
    }
</script>