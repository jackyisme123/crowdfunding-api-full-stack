<template>
<div>
  <!-- login model -->
  <div id="loginModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-sm" role="content">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login </h4>
          <button type="button" class="close" data-dismiss="modal" @click="default_login_modal()">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="sr-only" for="loginInputUsername">Username</label>
              <input type="text" class="form-control form-control-sm mr-1" id="loginInputUsername" placeholder="Username" v-model="login_username">
            </div>
            <div class="form-group">
              <label class="sr-only" for="loginInputPassword3">Password</label>
              <input type="password" class="form-control form-control-sm mr-1" id="loginInputPassword3" placeholder="Password" v-model="login_pwd">
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="remember_me"> Remember me
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="row" style="color: red; font-family: 'Times New Roman', Times, serif;">{{login_error_msg}}</div>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_login_modal()">Cancel</button>
          <button type="button" class="btn btn-primary btn-sm" @click="log_in()">Sign in</button>
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
              <input type="text" class="form-control form-control-sm offset-1 col-6" id="signupInputUsername" placeholder="Username" v-model="sign_username" @blur="check_sign_username()">
              <span style="color: red">*</span>
              <span class="col" id="username_msg" v-bind:style="{color:username_msg_color}">{{sign_username_msg}}</span>
            </div>
            <div class="form-group row">
              <label class="sr-only" for="signupEmail">Email</label>
              <input type="email" class="form-control form-control-sm offset-1 col-6" id="signupEmail" placeholder="Email" v-model="sign_email" @blur="check_sign_email()">
              <span style="color: red">*</span>
              <label class="col" id="email_msg" v-bind:style="{color:email_msg_color}">{{sign_email_msg}}</label>
            </div>
            <div class="form-group row">
              <label class="sr-only" for="signupInputPassword">Password</label>
              <input type="password" class="form-control form-control-sm offset-1 col-6" id="signupInputPassword" placeholder="Password" v-model="sign_pwd" @blur="check_sign_pwd()">
              <span style="color: red">*</span>
              <label class="col" id="pwd_msg" v-bind:style="{color:pwd_msg_color}">{{sign_pwd_msg}}</label>
            </div>
            <div class="form-group row">
              <label class="sr-only" for="signupInputPassword2">Confirm Password</label>
              <input type="password" class="form-control form-control-sm offset-1 col-6" id="signupInputPassword2" placeholder="Confirm Password" v-model="sign_confirmpwd " @blur="confirm_sign_pwd()">
              <span style="color: red">*</span>
              <label class="col" id="confirmpwd_msg" v-bind:style="{color:confirmpwd_msg_color}">{{sign_confirmpwd_msg}}</label>
            </div>
            <div class="form-group row">
              <label class="sr-only" for="signupLocation">Location</label>
              <input type="text" class="form-control form-control-sm offset-1 col-9" id="signupLocation" placeholder="Location" v-model="sign_location" @blur="check_sign_location()">
              <label class="col" id="location_msg" v-bind:style="{color:location_msg_color}">{{sign_location_msg}}</label>
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <div style="font-family: 'Times New Roman', Times, serif;" v-bind:style="{color:error_msg_color}">{{error_msg}}</div>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_signup_modal()">Cancel</button>
          <button type="button" class="btn btn-primary btn-sm" @click="register()">Sign & Login</button>
        </div>
      </div>
    </div>
  </div>
  <!-- delete_user_modle -->
  <div id="delete_user_modal" class="modal fade" role="dialog">
    <div class="modal-dialog" role="content">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete User</h4>
          <button type="button" class="close" data-dismiss="modal" @click="default_delete_user_modal()">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label style="font-family: 'Times New Roman'" class="offset-1col-lg-6 col-10">Re-enter your username:</label>
              <input type="text" class="form-control form-control-sm col-lg-4 offset-1 col-10" placeholder="Username" v-model="delete_username">
              <label class="col-lg-12 offset-1 col-10" style="color:red; font-family: 'Times New Roman', Times, serif;">{{delete_user_msg}}</label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_delete_user_modal()">Cancel</button>
              <button type="button" class="btn btn-warning btn-sm" @click="delete_user()">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>


</template>

<script>
    export default {
        data() {
            return {
                sign_username: '',
                sign_email: '',
                sign_pwd: '',
                sign_confirmpwd: '',
                sign_location: '',
                username_msg_color: '',
                sign_username_msg: '',
                email_msg_color: '',
                sign_email_msg: '',
                pwd_msg_color: '',
                sign_pwd_msg: '',
                confirmpwd_msg_color: '',
                sign_confirmpwd_msg: '',
                location_msg_color: '',
                sign_location_msg: '',
                flag_username: false,
                flag_email: false,
                flag_pwd: false,
                flag_confirmpwd: false,
                error_msg: '',
                login_username:'',
                login_pwd:'',
                login_error_msg:'',
                remember_me:0,
                error_msg_color:'white',
                delete_user_msg:'',
                delete_username:'',
//                session_username: this.$session.get('username'),
//                session_token: this.$session.get('token'),
//                session_id: this.$session.get('id'),
            }
        },
        methods: {
//same username check(did not add)
            check_sign_username() {
                if (this.sign_username == '') {
                    this.username_msg_color = 'red';
                    this.sign_username_msg = ' Username cannot be empty';
                    document.getElementById("username_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_username = false;
                }else {
                    this.username_msg_color = 'green';
                    this.sign_username_msg = '';
                    document.getElementById("username_msg").className = 'col fa fa-check';
                    this.flag_username = true;
                }
            },
//email format check
            check_sign_email() {
                let email_reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/; ;
                if (this.sign_email == '') {
                    this.email_msg_color = 'red';
                    this.sign_email_msg = ' Email address cannot be empty';
                    document.getElementById("email_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_email = false;
                } else if(!email_reg.test(this.sign_email)){
                    this.email_msg_color = 'red';
                    this.sign_email_msg = ' Incorrect Email address format';
                    document.getElementById("email_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_email = false;
                }else {
                    this.email_msg_color = 'green';
                    this.sign_email_msg = '';
                    document.getElementById("email_msg").className = 'col fa fa-check';
                    this.flag_email = true;
                }
            },
            check_sign_pwd() {
                if (this.sign_pwd == '') {
                    this.pwd_msg_color = 'red';
                    this.sign_pwd_msg = ' Password cannot be empty';
                    document.getElementById("pwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_pwd = false;
                } else if (this.sign_confirmpwd == this.sign_pwd) {
                    this.pwd_msg_color = 'green';
                    this.sign_pwd_msg = '';
                    document.getElementById("pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.confirmpwd_msg_color = 'green';
                    this.sign_confirmpwd_msg = '';
                    document.getElementById("confirmpwd_msg").className = 'col fa fa-check';
                    this.flag_confirmpwd = true;
                } else if (this.sign_confirmpwd == '') {
                    this.pwd_msg_color = 'green';
                    this.sign_pwd_msg = '';
                    document.getElementById("pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.flag_confirmpwd = false;
                } else {
                    this.pwd_msg_color = 'green';
                    this.sign_pwd_msg = '';
                    document.getElementById("pwd_msg").className = 'col fa fa-check';
                    this.flag_pwd = true;
                    this.confirmpwd_msg_color = 'red';
                    this.sign_confirmpwd_msg = ' Confirm password must be same';
                    document.getElementById("confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                }
            },
            confirm_sign_pwd() {
                if (this.sign_confirmpwd == '') {
                    this.confirmpwd_msg_color = 'red';
                    this.sign_confirmpwd_msg = ' Password cannot be empty';
                    document.getElementById("confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                } else if (this.sign_confirmpwd != this.sign_pwd) {
                    this.confirmpwd_msg_color = 'red';
                    this.sign_confirmpwd_msg = ' Confirm password must be same';
                    document.getElementById("confirmpwd_msg").className = 'col fa fa-exclamation-triangle';
                    this.flag_confirmpwd = false;
                } else {
                    this.confirmpwd_msg_color = 'green';
                    this.sign_confirmpwd_msg = '';
                    document.getElementById("confirmpwd_msg").className = 'col fa fa-check';
                    this.flag_confirmpwd = true;
                }
            },
            check_sign_location() {
                this.location_msg_color = 'green';
                this.sign_location_msg = '';
                document.getElementById("location_msg").className = 'col fa fa-check';
            },
            default_signup_modal() {
                this.sign_username = '';
                this.sign_email = '';
                this.sign_pwd = '';
                this.sign_confirmpwd = '';
                this.sign_location = '';
                this.username_msg_color = '';
                this.sign_username_msg = '';
                this.email_msg_color = '';
                this.sign_email_msg = '';
                this.pwd_msg_color = '';
                this.sign_pwd_msg = '';
                this.confirmpwd_msg_color = '';
                this.sign_confirmpwd_msg = '';
                this.location_msg_color = '';
                this.sign_location_msg = '';
                document.getElementById("username_msg").className = 'col';
                document.getElementById("email_msg").className = 'col';
                document.getElementById("pwd_msg").className = 'col';
                document.getElementById("confirmpwd_msg").className = 'col';
                document.getElementById("location_msg").className = 'col';
                this.flag_username = false;
                this.flag_email = false;
                this.flag_pwd = false;
                this.flag_confirmpwd = false;
                this.error_msg = '';
                this.error_msg_color='white';
            },
            register() {
                if (this.flag_username && this.flag_email && this.flag_pwd && this.flag_confirmpwd == true) {
                    this.$http.post('http://localhost:4941/api/v2/users',
                        {
                            "username": this.sign_username,
                            "email": this.sign_email,
                            "password": this.sign_confirmpwd,
                            "location": this.sign_location
                        }
                    ).then(function (res) {
                        this.login_username=this.sign_username;
                        this.login_pwd=this.sign_confirmpwd;
                        this.default_signup_modal();
                        $("#signupModal").modal('hide');
                        this.$http.post('http://localhost:4941/api/v2/users/login?username='+this.login_username+'&password='+this.login_pwd)
                            .then(function (res) {
                                console.log(res);
                                if(res.status==200&&'token' in res.body){
                                    this.$session.start();
                                    this.$session.set('username', this.login_username);
                                    this.$session.set('id', res.body.id);
                                    this.$session.set('token', res.body.token);
                                    this.default_login_modal();
                                    window.sessionStorage.setItem('islogin',true);
                                    this.$router.push({path: '/profile'});
                                }
                            });
                    },function (error) {
                        this.error_msg_color='red';
                        this.error_msg = 'Username or email address has been occupied or other errors happen';
                    });
                } else {
                    this.error_msg_color='red';
                    this.error_msg = 'Wrong enter, please check sign up information';
                }
            },
            log_in() {
                this.$http.post('http://localhost:4941/api/v2/users/login?username='+this.login_username+'&password='+this.login_pwd)
                    .then(function (res) {
//                        console.log(res);
                        if(res.status==200&&'token' in res.body){
                            this.$session.start();
                            this.$session.set('username', this.login_username);
                            this.$session.set('id', res.body.id);
                            this.$session.set('token', res.body.token);
//                            Vue.http.headers.common['X-Authorization']=res.body.token;
                            $("#loginModal").modal('hide');
                            this.default_login_modal();
                            window.sessionStorage.setItem('islogin',true);
                            this.$router.push({path: '/profile'});
                        }
                    }, function (error) {
                      this.login_error_msg='Incorrect';
                        this.login_username='';
                        this.login_pwd='';
                        this.remember_me=0;

                    });
            },
            default_login_modal (){
                this.login_username='';
                this.login_pwd='';
                this.login_error_msg='';
                this.remember_me=0;
            },
            delete_user(){
                console.log(this.delete_username+', '+this.$session.get('username'));
                if (this.delete_username==this.$session.get('username')){
                    this.$http.delete('http://localhost:4941/api/v2/users/'+this.$session.get('id'),
                        {
                            headers: {
                                'X-Authorization': this.$session.get('token')
                            }
                        }).then(function (res) {
                            this.default_delete_user_modal();
                            this.$router.push({path: '/'});
                            window.sessionStorage.setItem('islogin',false);
                            this.$session.destroy();
                            $("#delete_user_modal").modal('hide');
                    }, function (err) {
                        this.delete_user_msg = "Fail";
                    });
                } else{
                    this.delete_user_msg="Incorrect username"
                }
            },
            default_delete_user_modal(){
                this.delete_user_msg='';
                this.delete_username='';
            }

        }
    }
</script>


