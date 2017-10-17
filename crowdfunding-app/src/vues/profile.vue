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
                            <li class="nav-item"><router-link :to="{path: '/create_new'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-compass fa-lg"></span>&nbspStart</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
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
                        <h3>My Profile</h3>
                        <hr>
                    </div>
                </div>
                    <br>
                    <ul class="nav nav-tabs">
                        <li class="nav-item col-4 text-center">
                            <a class="nav-link active" href="#profile" role="tab" data-toggle="tab">My Profile</a>
                        </li>
                        <li class="nav-item col-4 text-center">
                            <a class="nav-link" href="#my_project" role="tab" data-toggle="tab">My Project</a>
                        </li>
                        <li class="nav-item col-4 text-center">
                            <a class="nav-link" href="#my_pledge" role="tab" data-toggle="tab">My pledge</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpannel" class="tab-pane fade show active" id="profile">
                            <br>
                                <div class="row" style="height:50px">
                                    <div class="offset-1 col-2" style="font-family: 'Times New Roman'; font-weight: bold">
                                        Id:
                                    </div>
                                    <div class="offset-1 col" style="font-weight: bold">
                                        {{login_user_id}}
                                    </div>
                                </div>
                            <div class="row" style="height:50px">
                                <div class="offset-1 col-2" style="font-family: 'Times New Roman'; font-weight: bold">
                                    Name:
                                </div>
                                <div class="offset-1 col" style="font-weight: bold">
                                    {{login_username}}
                                </div>
                            </div>
                            <div class="row" style="height:50px">
                                <div class="offset-1 col-2" style="font-family: 'Times New Roman'; font-weight: bold">
                                    Email:
                                </div>
                                <div class="offset-1 col" style="font-weight: bold">
                                    {{login_user_email}}
                                </div>
                            </div>
                            <div class="row" style="height:50px">
                                <div class="offset-1 col-2" style="font-family: 'Times New Roman'; font-weight: bold">
                                    Address:
                                </div>
                                <div class="offset-1 col" style="font-weight: bold">
                                    {{login_user_location}}
                                </div>
                            </div>
                            <div class="row">
                                <div class="offset-1 col-lg-1 col-3">
                                <button type="button" class="btn btn-sm btn-primary" @click="to_user_modify()">
                                    Modify
                                </button>
                                </div>
                                <div class="col-lg-1 col-3">
                                <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#delete_user_modal">
                                    Delete
                                </button>
                                </div>
                            </div>
                            <br>
                        </div>
                        <div role="tabpannel" class="tab-pane fade" id="my_project">
                            <div class="table-responsive table-hover">
                                <span style="font-family: 'Times New Roman';font-weight: bold;">Only Latest 5 projects showed</span>
                                <br>
                                <router-link :to="{path: '/my_project'}">View More</router-link>
                                <table class="table text-center">
                                    <thead class="thead-inverse">
                                    <tr class="row">
                                        <th class="text-center col-2 col-lg-3">ID</th>
                                        <th class="text-center col-2 col-lg-3">Logo</th>
                                        <th class="text-center col-4 col-lg-3">Title</th>
                                        <th class="text-center col-4 col-lg-3">Subtitle</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="empty_flag1==1" v-for="project in my_projects">
                                    <tr class="row">
                                        <td class="col-2 col-lg-3">{{project.id}}</td>
                                        <td class="col-2 col-lg-3"><img :src="'http://localhost:4941/api/v2/'+project.imageUri" class="img-fluid" height="100" width="100" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;"></td>
                                        <td class="col-4 col-lg-3">{{project.title}}</td>
                                        <td class="col-4 col-lg-3">{{project.subtitle}}</td>
                                    </tr>
                                    </tbody>
                                    <tbody v-if="empty_flag1==0">
                                    <tr class="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><h2>Empty</h2></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div role="tabpannel" class="tab-pane fade" id="my_pledge">
                            <div class="table-responsive table-hover">
                                <span style="font-family: 'Times New Roman';font-weight: bold;">Only Latest 5 pledges showed</span>
                                <br>
                                <router-link :to="{path: '/my_pledge'}">View More</router-link>
                                <table class="table text-center">
                                    <thead class="thead-inverse">
                                    <tr class="row">
                                        <th class="text-center col-2 col-lg-3">ID</th>
                                        <th class="text-center col-2 col-lg-3">Logo</th>
                                        <th class="text-center col-4 col-lg-3">Title</th>
                                        <th class="text-center col-4 col-lg-3">Subtitle</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="empty_flag==1" v-for="project in my_pledges">
                                        <tr class="row">
                                        <td class="col-2 col-lg-3">{{project.id}}</td>
                                            <td class="col-2 col-lg-3"><img :src="'http://localhost:4941/api/v2/'+project.imageUri" class="img-fluid" height="100" width="100" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;"></td>
                                            <td class="col-4 col-lg-3">{{project.title}}</td>
                                        <td class="col-4 col-lg-3">{{project.subtitle}}</td>
                                        </tr>
                                    </tbody>
                                    <tbody v-if="empty_flag==0">
                                    <tr class="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><h2>Empty</h2></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                <br>
                <br>
            </div>
        </div>
        <div id="footer" class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-5 offset-1 col-lg-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><router-link :to="{path: '/create_new'}"><span class="fa fa-compass fa-lg"></span> &nbspStart</router-link></li>
                            <li><router-link :to="{path: '/login_about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
                            <li><router-link :to="{path: '/login_project'}"><span class="fa fa-list fa-lg"></span> &nbspProject</router-link></li>
                            <li><router-link :to="{path: '/login_contact'}"><span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>

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
            return {
                login_username:this.$session.get('username'),
                login_user_id: '',
                login_user_email: '',
                login_user_location: '',
                my_pledges: [],
                empty_flag: 0,
                my_projects: [],
                empty_flag1:0
            }
        },
        mounted: function () {
            this.get_login_user();
            this.view_my_pledge();
            this.view_my_project();
        },
        methods: {
            log_out() {
                console.log(this.$session.get('token'));
                this.$http.post('http://localhost:4941/api/v2/users/logout/',
                    {},
                    {
                        headers:
                            {
                                'X-Authorization': this.$session.get('token')
                            },

                    },
                    ).then(function(res){
                    this.$router.push({path: '/'});
                    this.$router.islogin=false;
                    this.$session.destroy();
                    }, function (err) {
                    console.log(err);
                })
            },
            create_new() {
                this.$router.push({path: '/create_new'});
            },
            my_project() {
                this.$router.push({path: '/my_project'});
            },
            my_pledge() {
                this.$router.push({path: '/my_pledge'});
            },
            my_profile() {
                this.$router.push({path: '/profile'});
            },
            modify_user() {
                this.$router.push({path: '/user_modify'});
            },
            get_login_user() {
                this.$http.get('http://localhost:4941/api/v2/users/'+this.$session.get('id'),
                    {
                        headers: {
                            'X-Authorization': this.$session.get('token')
                        }
                    })
                    .then(function (res) {
                        this.login_user_id = res.body.id;
                        this.login_user_email = res.body.email;
                        this.login_user_location = res.body.location;
                    })
            },
            to_user_modify() {
                this.$router.push({path: '/user_modify'})
            },
            view_my_pledge(){

                this.$http.get('http://localhost:4941/api/v2/projects?count=5&open=true&backer='+this.$session.get('id'))
                    .then(function (res) {
                        if(res.body.length==0){
                            this.empty_flag=0;
                        }else{
                            this.empty_flag=1;
                            this.my_pledges=res.body;
                        }
                    })
            },
            view_my_project(){
                this.$http.get('http://localhost:4941/api/v2/projects?count=5&open=true&creator='+this.$session.get('id'))
                    .then(function (res) {
                        if(res.body.length==0){
                            this.empty_flag1=0;
                        }else{
                            this.empty_flag1=1;
                            this.my_projects=res.body;
                        }
                    })
            }

        }
    }
</script>