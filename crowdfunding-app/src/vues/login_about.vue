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
                            <li class="nav-item active"><router-link :to="{path: '/login_about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
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
        <div id="body">
            <br>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-12">
                        <h3>About us</h3>
                        <hr>
                    </div>
                </div>
                <div class="row row-content">
                    <div class="col-lg-5">
                        <h2 class="mt-0">Introduction</h2>
                        <p>Millions of people around the world visit DreamFunding to find clever and unconventional things that solve everyday problems large and small. By giving entrepreneurs everywhere a platform to launch new and groundbreaking products, we help surface innovations in tech, design, and much more, all before they go mainstream.</p>
                    </div>
                    <div class="offset-1 col-lg-6">
                        <div class="card">
                            <h5 class="card-header bg-primary text-white">Company Summary</h5>
                            <div class="card-block">
                                <dl class="row">
                                    <dt class="col-6">Started</dt>
                                    <dd class="col-6">15 Oct. 2017</dd>
                                    <dt class="col-6">Major Stake Holder</dt>
                                    <dd class="col-6">University of Canterbury</dd>
                                    <dt class="col-6">Last Year's Turnover</dt>
                                    <dd class="col-6">$1,000,000</dd>
                                    <dt class="col-6">Employees</dt>
                                    <dd class="col-6">5</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-content align-items-center">

                    <div class="col-sm-4 col-md-3 flex-last">
                        <h3>Chief Executive Officer</h3>
                    </div>

                    <div class="col-sm col-md flex-first">
                        <div class="media">
                            <img class="d-flex mr-3 img-thumbnail align-self-center" src="/src/img/trump.jpg" alt="Trump" height="200" width="200">
                            <div class="media-body">
                                <h2 class="mt-0">Donald John Trump</h2>
                                <p>Donald, our CEO and co-founder, sounds American but he's definitely a Kiwi. If pushed, he’ll say he’s technically from Dunedin, but will later admit he grew up in Boston. Having roamed around the world, he’s back to call Wellington home.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row row-content align-items-center">
                    <div class="col-sm-4 col-md-3">
                        <h3>Chief Financial Officer</h3>
                    </div>
                    <div class="col-sm col-md">
                        <div class="media">

                            <div class="media-body">
                                <h2>김정은(Kim Jong-un)</h2>
                                <p>Kim's our Irish blow-in. He's a rebel banker with an eye for fresh financial ideas. Whether it's crowdlending or equity crowdfunding that you're curious about, he's always happy to lend an ear and share some insight.</p>
                            </div>
                            <img class="d-flex ml-3 img-thumbnail align-self-center" src="/src/img/Kim.jpg" alt="Kim" height="200" width="200">
                        </div>
                    </div>
                </div>

                <div class="row row-content align-items-center">
                    <div class="col-sm-4 col-md-3 flex-last">
                        <h3>Chief Technology Officer</h3>
                    </div>
                    <div class="col-sm col-md flex-first">

                        <div class="media">
                            <img class="d-flex mr-3 img-thumbnail align-self-center" src="/src/img/ma.jpg" alt="ma" height="200" width="200">
                            <div class="media-body">
                                <h2>马云(Jack Ma)</h2>
                                <p>Jack brings home the bacon for amazing kiwi businesses (faking bacon for our vegan friends). His background is in tech, business development and raising capability. He has an MBA, however found out too late that it didn’t mean Master of Beer Appreciation.</p>
                            </div>
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
                user_id:this.$session.get('id'),
                login_username:this.$session.get('username'),
                session_token: this.$session.get('token')
            }
        },
        mounted: function () {
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


        }
    }
</script>