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
                            <li class="nav-item active"><router-link :to="{path: '/login_project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
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
        <div class="body">
            <br>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-12">
                        <h3>Project Summary</h3>
                        <hr>
                    </div>
                </div>
                <div class="row-content row">
                    <div class="col-12 col-lg-10">
                        <h2>Overview</h2>
                        <div class="row pull-right" style="background-color: rgb(255,255,255); padding:10px;">
                            <div>
                                <div class="main">
                                    <form class="search-box sbx-twitter">
                                        <div role="search" class="sbx-twitter__wrapper">
                                            <input type="search" name="vueInstant" placeholder="Enter Keyword(s)" class="sbx-twitter__input" v-model="search">
                                            <button type="button" class="sbx-twitter__submit" ><i class="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive table-hover">
                            <table class="table text-center">
                                <thead class="thead-inverse">
                                <tr class="row">
                                    <th class="text-center col-2 col-lg-2">ID</th>
                                    <th class="text-center col-2 col-lg-2">Logo</th>
                                    <th class="text-center col-3 col-lg-3">Title</th>
                                    <th class="text-center col-3 col-lg-3">Subtitle</th>
                                    <th class="text-center col-2 col-lg-2"></th>
                                </tr>
                                </thead>
                                <tbody v-if="empty_flag==1" v-for="project in current_projects">
                                <tr class="row" v-if="project.title.toLowerCase().indexOf(search.toLowerCase())!=-1||project.subtitle.toLowerCase().indexOf(search.toLowerCase())!=-1||search==''">
                                    <td class="col-2 col-lg-2">{{project.id}}</td>
                                    <td class="col-2 col-lg-2"><img :src="'http://localhost:4941/api/v2/'+project.imageUri" class="img-fluid" height="100" width="100" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;"></td>
                                    <td class="col-3 col-lg-3">{{project.title}}</td>
                                    <td class="col-3 col-lg-3">{{project.subtitle}}</td>
                                    <td class="col-2 col-lg-2 align-self-center" style="border: 1px solid transparent">
                                        <button v-if="as_creator_id.indexOf(project.id)!=-1" class="btn btn-primary" type="button" @click="view_creator(project.id)" style="width:90px">Created</button>
                                        <button v-else-if="as_backer_id.indexOf(project.id)!=-1" class="btn btn-primary" type="button" @click="view_backer(project.id)" style="width:90px">Pledged</button>
                                        <button v-else="" class="btn btn-primary" type="button" @click="view_pledge(project.id)" style="width:90px">Enter</button>
                                    </td>
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
                                <tfoot>
                                <br>
                                <br>
                                <br>
                                <div class="btn-group btn-group-sm">
                                    <button class="btn btn-primary" type="button" @click="backward()">&laquo;</button>
                                    <div v-for="page_num in total_num">
                                        <button class="btn btn-primary" type="button" @click="go_page(page_num)">{{page_num}}</button>
                                    </div>
                                    <button class="btn btn-primary" type="button" @click="forward()">&raquo;</button>
                                </div>
                                </tfoot>
                            </table>
                        </div>
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
                            <li class="nav-item"><router-link :to="{path: '/create_new'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-compass fa-lg"></span>&nbspStart</router-link></li>
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
                user_id:this.$session.get('id'),
                login_username:this.$session.get('username'),
                session_token: this.$session.get('token'),
                projects: [],
                empty_flag: 0,
                as_creator_projects:[],
                as_creator_id:[],
                as_backer_projects:[],
                as_backer_id:[],
                search:'',
                page_num:1,
                per_page:5,
                total_num:0,
                current_projects:[]
            }
        },
        mounted: function () {
            this.view_my_project();
        },
        methods: {
            log_out() {
//                console.log(this.$session.get('token'));
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
                    window.sessionStorage.setItem('islogin',false);
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
            view_my_project(){
                this.$http.get('http://localhost:4941/api/v2/projects?open=true')
                    .then(function (res) {
                        if(res.body.length==0){
                            this.empty_flag=0;
                            return;
                        }else{
                            this.empty_flag=1;
                            this.projects=res.body;
                            this.total_num=Math.ceil(this.projects.length/this.per_page);
                            this.current_projects=[];
                            for(let i in this.projects){
                                if(i>=this.per_page*(this.page_num-1)&&i<=this.per_page*(this.page_num-1)+4) {
                                    this.current_projects.push(this.projects[i]);
                                }
                            }
                            this.$http.get('http://localhost:4941/api/v2/projects?open=true&creator='+this.user_id)
                                .then(function (res1) {
                                    this.as_creator_projects=res1.body;
                                    for(let creator_project of this.as_creator_projects){
                                        this.as_creator_id.push(creator_project.id);
                                    }
                                    this.$http.get('http://localhost:4941/api/v2/projects?open=true&backer='+this.user_id)
                                        .then(function (res2) {
                                            this.as_backer_projects=res2.body;
                                            for(let backer_project of this.as_backer_projects){
                                                this.as_backer_id.push(backer_project.id);
                                            }
                                            for(let project1 of this.projects){
                                                if(this.as_creator_id.indexOf(project1.id)!=-1){
                                                    project1["status"]=0;
                                                }else if(this.as_backer_id.indexOf(project1.id)!=-1){
                                                    project1["status"]=1;
                                                }else{
                                                    project1["status"]=2;
                                                }
                                            }
                                        });

                                });
                        }
                    });
            },
            view_creator(pro_id) {
                this.$session.set('pro_status', 'my_project');
                this.$router.push({path: '/project_detail/'+ pro_id});

            },
            view_backer(pro_id) {
                this.$session.set('pro_status', 'my_pledge');
                this.$router.push({path: '/project_detail/'+ pro_id});

            },
            view_pledge(pro_id) {
                this.$session.set('pro_status', 'make_pledge');
                this.$router.push({path: '/project_detail/'+ pro_id});

            },
            go_page(pn){
                this.page_num=pn;
                this.view_my_project();
            },
            forward(){
                if(this.page_num<this.total_num){
                    this.page_num+=1;
                    this.view_my_project();
                }
            },
            backward(){
                if(this.page_num>1){
                    this.page_num-=1;
                    this.view_my_project();
                }
            }

        }
    }
</script>