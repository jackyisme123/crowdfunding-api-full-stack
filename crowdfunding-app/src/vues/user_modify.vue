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
                            <li class="nav-item"><router-link :to="{path: './login_home'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                            <li class="nav-item"><router-link :to="{path: './login_about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                            <li class="nav-item"><router-link :to="{path: './login_project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                            <li class="nav-item"><router-link :to="{path: './login_contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
                        </ul>
                        <div class="dropdown">
                            <div class="navbar-text dropdown-toggle" id="user_menu" data-toggle="dropdown">
                                &nbsp&nbsp&nbsp&nbsp<span class="fa fa-user fa-lg">&nbsp&nbsp{{login_username}}</span>
                                <b class="caret"></b>
                            </div>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="user_menu">
                                <li class="dropdown-header">Project</li>
                                <li role="presentation" class="menu-item" @click="create_new()"><a>Create New</a></li>
                                <li role="presentation" class="menu-item" @click="my_project()"><a>My Project</a></li>
                                <li role="presentation" class="menu-item" @click="my_pledge()"><a>My Pledge</a></li>
                                <li class="menu-item" style="color:#808080">---------------</li>
                                <li class="dropdown-header">Setting</li>
                                <li role="presentation" class="menu-item" @click="my_profile()"><a>My Profile</a></li>
                                <li role="presentation" class="menu-item" @click="modify_user()"><a>Modify User</a></li>
                                <li role="presentation" class="menu-item" data-toggle="modal" data-target="#delete_user_modal"><a>Delete User</a></li>
                                <li class="menu-item" style="color:#808080">---------------</li>
                                <li role="presentation" class="menu-item" @click="log_out()"><a>Logout</a></li>

                            </ul>

                        </div>
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
        <div>
            <br>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-12">
                        <h3>Modify User Info</h3>
                        <hr>
                    </div>
                </div>
                <div class="row row-content">
                    <div class="col-12">
                        <form>
                            <div class="form-group row">
                                <label for="username" class="col-5 col-lg-2 col-form-label">User Name<span style="color:red">*</span></label>
                                <div class="col-7 col-lg-6">
                                    <input type="text" class="form-control" id="username" name="username" placeholder="User Name" v-model="modify_username" @blur="check_modify_username()">
                                </div>
                                <span class="col-12 col-lg-4" v-bind:style="{color: username_msg_color}" id="modify_username_msg">{{modify_username_msg}}</span>
                            </div>
                            <div class="form-group row">
                                <label for="pwd" class="col-lg-2 col-5 col-form-label">Password<span style="color:red">*</span></label>
                                <div class="col-lg-6 col-7">
                                    <input type="password" class="form-control" id="pwd" name="pwd" placeholder="Password" v-model="modify_pwd" @blur="check_modify_pwd()">
                                </div>
                                <span class="col-lg-4 col-12" v-bind:style="{color: pwd_msg_color}" id="modify_pwd_msg">{{modify_pwd_msg}}</span>
                            </div>
                            <div class="form-group row">
                                <label for="confirmpwd" class="col-lg-2 col-5 col-form-label">Confirm Pwd<span style="color:red">*</span></label>
                                <div class="col-lg-6 col-7">
                                    <input type="password" class="form-control" id="confirmpwd" name="confirmpwdpwd" placeholder="Confirm Password" v-model="modify_confirmpwd" @blur="check_modify_confirmpwd()">
                                </div>
                                <span class="col-lg-4 col-12" v-bind:style="{color: confirmpwd_msg_color}" id="modify_confirmpwd_msg">{{modify_confirmpwd_msg}}</span>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-lg-2 col-5 col-form-label">Email Address<span style="color:red">*</span></label>
                                <div class="col-lg-6 col-7">
                                    <input type="text" class="form-control" id="email" name="email" placeholder="Email Address" v-model="modify_email" @blur="check_modify_email()">
                                </div>
                                <span class="col-lg-4 col-12" v-bind:style="{color: email_msg_color}" id="modify_email_msg">{{modify_email_msg}}</span>
                            </div>
                            <div class="form-group row">
                                <label for="location" class="col-lg-2 col-5 col-form-label">Location</label>
                                <div class="col-lg-6 col-7  ">
                                    <input type="text" class="form-control" id="location" name="location" placeholder="Location" v-model="modify_location" @blur="check_modify_location()">
                                </div>
                                <span class="col-lg-4 col-12" v-bind:style="{color: location_msg_color}" id="modify_location_msg">{{modify_location_msg}}</span>
                            </div>
                            <br><br>
                            <div class="form-group row">
                                <label class="col-lg-6 col-5" v-bind:style="{color: modify_error_msg_color}">{{modify_error_msg}}</label>

                                <div class="col-lg-1 col-3">

                                    <button type="button" class="btn btn-primary" @click="modify_user_info()">
                                        Submit
                                    </button>
                                </div>
                                &nbsp&nbsp&nbsp&nbsp
                                <div class="col-lg-1 col-3">
                                    <button type="button" class="btn btn-warning" @click="default_modify()">
                                        Empty
                                    </button>
                                </div>
                            </div>
                        </form>
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
                            <li><router-link :to="{path: './login_home'}"><span class="fa fa-home fa-lg"></span> &nbspHome</router-link></li>
                            <li><router-link :to="{path: './lgoin_about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
                            <li><router-link :to="{path: './login_project'}"><span class="fa fa-list fa-lg"></span> &nbspProject</router-link></li>
                            <li><router-link :to="{path: './login_contact'}"><span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>

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
            return {
                login_username:this.$session.get('username'),
                modify_username: '',
                modify_email: '',
                modify_pwd: '',
                modify_confirmpwd: '',
                modify_location: '',
                username_msg_color: 'black',
                modify_username_msg: '',
                email_msg_color: 'black',
                modify_email_msg: '',
                pwd_msg_color: 'black',
                modify_pwd_msg: '',
                confirmpwd_msg_color: 'black',
                modify_confirmpwd_msg: '',
                location_msg_color: 'black',
                modify_location_msg: '',
                flag_username: false,
                flag_email: false,
                flag_pwd: false,
                flag_confirmpwd: false,
                modify_error_msg: '',
                modify_error_msg_color: 'white',
                user_id:this.$session.get('id'),
                session_token: this.$session.get('token')
            }
        },
        mounted: function () {
            this.default_modify();
        },
        methods: {
            log_out() {
                this.$router.push({path: './'});
                this.$session.destroy();
            },
            create_new() {
                this.$router.push({path: './create_new'});
            },
            my_project() {
                this.$router.push({path: './my_project'});
            },
            my_pledge() {
                this.$router.push({path: './my_pledge'});
            },
            my_profile() {
                this.$router.push({path: './profile'});
            },
            modify_user() {
                this.$router.push({path: './user_modify'});
            },
            check_modify_username() {
                if (this.modify_username == '') {
                    this.username_msg_color = 'red';
                    this.modify_username_msg = ' Username cannot be empty';
                    document.getElementById("modify_username_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_username = false;
                }else {
                    this.username_msg_color = 'green';
                    this.modify_username_msg = '';
                    document.getElementById("modify_username_msg").className = 'col fa fa-check';
                    this.flag_username = true;
                }
            },
            check_modify_email() {
                let email_reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/; ;
                if (this.modify_email == '') {
                    this.email_msg_color = 'red';
                    this.modify_email_msg = ' Email address cannot be empty';
                    document.getElementById("modify_email_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_email = false;
                } else if(!email_reg.test(this.modify_email)){
                    this.email_msg_color = 'red';
                    this.modify_email_msg = ' Incorrect Email address format';
                    document.getElementById("modify_email_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_email = false;
                }else {
                    this.email_msg_color = 'green';
                    this.modify_email_msg = '';
                    document.getElementById("modify_email_msg").className = 'col fa fa-check';
                    this.flag_email = true;
                }
            },
            check_modify_pwd() {
                if (this.modify_pwd == '') {
                    this.pwd_msg_color = 'red';
                    this.modify_pwd_msg = ' Password cannot be empty';
                    document.getElementById("modify_pwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_pwd = false;
                } else if (this.modify_confirmpwd == this.modify_pwd) {
                    this.pwd_msg_color = 'green';
                    this.modify_pwd_msg = '';
                    document.getElementById("modify_pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.confirmpwd_msg_color = 'green';
                    this.modify_confirmpwd_msg = '';
                    document.getElementById("modify_confirmpwd_msg").className = 'col fa fa-check';
                    this.flag_confirmpwd = true;
                } else if (this.modify_confirmpwd == '') {
                    this.pwd_msg_color = 'green';
                    this.modify_pwd_msg = '';
                    document.getElementById("modify_pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.flag_confirmpwd = false;
                } else {
                    this.pwd_msg_color = 'green';
                    this.modify_pwd_msg = '';
                    document.getElementById("modify_pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.confirmpwd_msg_color = 'red';
                    this.modify_confirmpwd_msg = ' Confirm password must be same';
                    document.getElementById("modify_confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                }
            },
            check_modify_confirmpwd() {
                if (this.modify_confirmpwd == '') {
                    this.confirmpwd_msg_color = 'red';
                    this.modify_confirmpwd_msg = ' Password cannot be empty';
                    document.getElementById("modify_confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                } else if (this.modify_confirmpwd != this.modify_pwd) {
                    this.confirmpwd_msg_color = 'red';
                    this.modify_confirmpwd_msg = ' Confirm password must be same';
                    document.getElementById("modify_confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                } else {
                    this.confirmpwd_msg_color = 'green';
                    this.modify_confirmpwd_msg = '';
                    document.getElementById("modify_confirmpwd_msg").className = 'col fa fa-check';
                    this.flag_confirmpwd = true;
                }
            },
            check_modify_location() {
                this.location_msg_color = 'green';
                this.modify_location_msg = '';
                document.getElementById("modify_location_msg").className = 'col fa fa-check';
            },
            default_modify() {
                this.modify_username = '';
                this.modify_email = '';
                this.modify_pwd = '';
                this.modify_confirmpwd = '';
                this.modify_location = '';
                this.username_msg_color = 'black';
                this.modify_username_msg = '';
                this.email_msg_color = 'black';
                this.modify_email_msg = '';
                this.pwd_msg_color = 'black';
                this.modify_pwd_msg = '';
                this.confirmpwd_msg_color = 'black';
                this.modify_confirmpwd_msg = '';
                this.location_msg_color = 'black';
                this.modify_location_msg = '';
                document.getElementById("modify_username_msg").className = 'col';
                document.getElementById("modify_email_msg").className = 'col';
                document.getElementById("modify_pwd_msg").className = 'col';
                document.getElementById("modify_confirmpwd_msg").className = 'col';
                document.getElementById("modify_location_msg").className = 'col';
                this.flag_username = false;
                this.flag_email = false;
                this.flag_pwd = false;
                this.flag_confirmpwd = false;
                this.modify_error_msg = '';
                this.modify_error_msg_color='white';
            },
            modify_user_info() {
                if (this.flag_username && this.flag_email && this.flag_pwd && this.flag_confirmpwd == true) {
                    this.$http.put('http://localhost:4941/api/v2/users/'+this.user_id,
                        {
                            "username": this.modify_username,
                            "email": this.modify_email,
                            "password": this.modify_confirmpwd,
                            "location": this.modify_location
                        },
                        {
                        headers: {
                            'X-Authorization': this.session_token
                        }
                        }
                    ).then(function (res) {
                        this.$session.set('username',this.modify_username);
                        this.default_modify();
                        this.$router.push({path: '/profile'});
                    },function (error) {
                        this.modify_error_msg_color='red';
                        this.modify_error_msg = 'Username or email address has been occupied or other errors happen';
                    });
                } else {
                    this.modify_error_msg_color='red';
                    this.modify_error_msg = 'Wrong enter, please check modify information';
                }
            }

        }
    }
</script>