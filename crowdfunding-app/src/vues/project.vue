<template>
    <div>
    <div id="nav">
    <nav class="navbar navbar-inverse navbar-toggleable-lg fixed-top" role="navigation">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-brand"><img src="../../src/img/logo-small.jpg" height="32" width="53"></div>
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><router-link :to="{path: '/'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                    <li class="nav-item"><router-link :to="{path: '/about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                    <li class="nav-item active"><router-link :to="{path: '/project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                    <li class="nav-item"><router-link :to="{path: '/contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
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
                                <tbody v-if="empty_flag==1" v-for="project in projects">
                                <tr class="row" v-if="project.title.toLowerCase().indexOf(search.toLowerCase())!=-1||project.subtitle.toLowerCase().indexOf(search.toLowerCase())!=-1||search==''">
                                    <td class="col-2 col-lg-2">{{project.id}}</td>
                                    <td class="col-2 col-lg-2"><img :src="'http://localhost:4941/api/v2/'+project.imageUri" class="img-fluid" height="100" width="100"></td>
                                    <td class="col-3 col-lg-3">{{project.title}}</td>
                                    <td class="col-3 col-lg-3">{{project.subtitle}}</td>
                                    <td class="col-2 col-lg-2 align-self-center" style="border: 1px solid transparent"><button class="btn btn-secondary" type="button" @click="view_detail(project.id)">Detail</button></td>
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
    export default{
        data() {
            return {
                projects: [],
                empty_flag: 0,
                search:''
            }
        },
        mounted: function(){
            this.get_all_projects();
        },
        methods: {
            get_all_projects(){
                this.$http.get('http://localhost:4941/api/v2/projects?open=true')
                    .then(function (res) {
                    if(res.body.length==0){
                        this.empty_flag=0;
                    }else{
                        this.empty_flag=1;
                        this.projects=res.body;
                    }
                });
            },
            view_detail(pro_id) {
                this.$router.push({path: '/project_detail/'+ pro_id});

            }
        }
    }
</script>