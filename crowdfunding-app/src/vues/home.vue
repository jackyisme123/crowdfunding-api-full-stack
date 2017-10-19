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
                            <li class="nav-item active"><router-link :to="{path: '/'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
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

        <div id="body">
            <div class="container">
                <div class="row-content row">
                    <div class="col">
                        <div id="mycarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#mycarousel" data-slide-to="1"></li>
                                <li data-target="#mycarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block img-fluid" src="/src/img/help.jpg" alt="First slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Dream Big</h2>
                                        <p class="hidden-xs-down">
                                            The Dream Fund is always highly competitive and the bar is set very high for what makes a successful applicant. We recognize that producing transformative projects is a difficult and time consuming process and we want to support applicants through the process of developing their ideas. </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="/src/img/dream.jpg" alt="Second slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Our Dream</h2>
                                        <p class="hidden-xs-down">
                                            No matter how creative we are, it’s impossible to know where our life stories will take us. Amidst the dreams we chase and the plans we make, there are inevitable hiccups. Sometimes, those hiccups are too big of burden to bear alone. But that doesn’t mean that those stories can’t have a happy ending. </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="/src/img/mountain.jpg" alt="Third slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Dream Support</h2>
                                        <p class="hidden-xs-down">
                                            Dream funding has hosted thousands of creative, civic and entrepreneurial projects from around the world and recently expanded to include young entrepreneurs ages 13 to 17 through partnerships with student organizations. </p>
                                    </div>
                                </div>

                            </div>
                            <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row-content row">
                    <div class="col-12">
                        <h2>What's New</h2>
                        <br>
                    </div>

                        <div class="img_wrapper col-12 offset-lg-1 col-lg-3" v-for="project in new_projects" @click="view_detail(project.id)">
                            <div class="col-12">
                                <img :src="'http://localhost:4941/api/v2/'+project.imageUri" height="250" width="250" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;">
                            </div>
                            <div class="col-4 pull-right" style="font-family: 'black';font-size: 0.8em;color:black;">
                                <p v-if="project.creators.length!=0">By&nbsp{{project.creators[0].username}}<br>{{new Date(new Date().setTime(project.creationDate)).toLocaleDateString()}}</p>
                                <p v-if="project.creators.length==0">By&nbspNull<br>{{new Date(new Date().setTime(project.creationDate)).toLocaleDateString()}}</p>
                            </div>
                            <div class="offset-1 col-7" v-if="parseInt(project.progress.numberOfBackers)>=5"><span class="badge badge-danger">HOT</span></div>
                            <div class="offset=1 col-7" v-else>&nbsp</div>
                            <div class="offset-1 col-7" v-if="parseInt(project.progress.currentPledged-project.target)>=0"><span class="badge badge-success">Finished</span></div>
                            <div class="offset-1 col-7" v-else-if="parseInt(project.progress.currentPledged/project.target*100)>75"><span class="badge badge-warning">Nearly Finish</span></div>
                            <div class="offset-1 col-7" v-else>&nbsp</div>
                            <hr>
                            <div class="col-12">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="'width: '+ (project.progress.currentPledged/project.target*100).toString() +'%'">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                               <div class="col-3">
                                    <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">{{parseInt(project.progress.currentPledged/project.target*100)}}%<br>funded</p>
                                </div>
                                <div class="col-3">
                                    <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">${{project.progress.currentPledged}}<br>pledged</p>
                                </div>
                                <div class="col-3">
                                    <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">{{project.progress.numberOfBackers}}<br>backers</p>
                                </div>
                            </div>
                            <hr>
                            <h4 class="col-12">
                                {{project.title}}
                            </h4>
                            <p class="col-12" style="font-family: Arial;font-style: italic;font-size: 1.0em;">
                                {{project.subtitle}}
                            </p>
                        </div>

                </div>
                <div class="row-content row">
                    <div class="col-12">
                        <h2>Day of Dream</h2>
                        <br>
                    </div>

                    <div class="img_wrapper col-12 offset-lg-1 col-lg-3" v-for="project in pop_projects" @click="view_detail(project.id)">
                        <div class="col-12">
                            <img :src="'http://localhost:4941/api/v2/'+project.imageUri" height="250" width="250" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;">
                        </div>
                        <div class="col-4 pull-right" style="font-family: 'black';font-size: 0.8em;color:black;">
                            <p v-if="project.creators.length!=0">By&nbsp{{project.creators[0].username}}<br>{{new Date(new Date().setTime(project.creationDate)).toLocaleDateString()}}</p>
                            <p v-if="project.creators.length==0">By&nbspNull<br>{{new Date(new Date().setTime(project.creationDate)).toLocaleDateString()}}</p>
                        </div>
                        <div class="offset=1 col-7" v-if="parseInt(project.progress.numberOfBackers)>=5"><span class="badge badge-danger">HOT</span></div>
                        <div class="offset=1 col-7" v-else>&nbsp</div>
                        <div class="offset=1 col-7" v-if="parseInt(project.target)- parseInt(project.progress.currentPledged)<=0"><span class="badge badge-success">Finished</span></div>
                        <div class="offset=1 col-7" v-else-if="parseInt(project.progress.currentPledged/project.target*100)>75"><span class="badge badge-warning">Nearly Finish</span></div>
                        <div class="offset=1 col-7" v-else>&nbsp</div>
                        <hr>
                        <div class="col-12">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"
                                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="'width: '+ (project.progress.currentPledged/project.target*100).toString() +'%'">
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-3">
                                <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">{{parseInt(project.progress.currentPledged/project.target*100)}}%<br>funded</p>
                            </div>
                            <div class="col-3">
                                <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">${{project.progress.currentPledged}}<br>pledged</p>
                            </div>
                            <div class="col-3">
                                <p class="col-12 text-center" style="font-family: Frutiger;font-size: 0.8em;font-weight: lighter">{{project.progress.numberOfBackers}}<br>backers</p>
                            </div>
                        </div>
                        <hr>
                         <h4 class="col-12">
                            {{project.title}}
                        </h4>
                        <p class="col-12" style="font-family: Arial;font-style: italic;font-size: 1.0em;">
                            {{project.subtitle}}
                        </p>
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
    export default{
        data() {
            return {
                empty_flag:0,
                new_projects:[],
                pop_projects:[]
            }
        },
        mounted: function(){
            this.get_all_projects();
            this.default();
        },
        methods: {
            default(){
                $('[data-toggle="tooltip"]').tooltip();
                $("#mycarousel").carousel({interval:4000});

            },
            get_all_projects(){
                this.$http.get('http://localhost:4941/api/v2/projects?open=true')
                    .then(function (res) {
                        if(res.body.length==0){
                            this.empty_flag=0;
                        }else{
                            this.empty_flag=1;
                            let projects=res.body;
                            let pro_ids= [];
                            let pro_ran_ids=[];
                            if(projects.length>3){
                                pro_ids.push(projects[0].id);
                                pro_ids.push(projects[1].id);
                                pro_ids.push(projects[2].id);
                                pro_ran_ids= this.randNum(1,projects.length,3);
                            }else{
                                for(let pro of projects){
                                    pro_ids.push(pro.id);
                                    pro_ran_ids.push(pro.id);
                                }

                            }
                            if(pro_ids.length!=0){
                                for(let id of pro_ids){
                                this.$http.get('http://localhost:4941/api/v2/projects/'+id)
                                    .then(function (res1) {
                                        this.new_projects.push(res1.body);
                                    });
                                }
                                for(let ran_id of pro_ran_ids){
                                    this.$http.get('http://localhost:4941/api/v2/projects/'+ran_id)
                                        .then(function (res2) {
                                            this.pop_projects.push(res2.body);
                                        });
                                }

                            }
                        }
                    });
            },
            view_detail(pro_id){
                this.$router.push({path: '/project_detail/'+ pro_id});
            },
            randNum(min, max, num) {
                var arr = [];
                let count=0;
                let t = 0;
                while(count<3){
                    t = parseInt(Math.random() * (max - min + 1) + min);
                    if(arr.indexOf(t)==-1){
                        arr.push(t);
                        count++;
                    }
                }
                return arr;
//
//                function fn(i) {
//                    for (i; i < num; i++) {
//                        t = parseInt(Math.random() * (max - min + 1) + min);
//                        for (var k in arr) {
//                            if (arr[k] == t) {
//                                fn(i);
//                                break;
//                            }
//                        }
//                        arr[i] = t;
//                    }
//                }
//
//                fn(0);
//                return arr

            }

        }
    }
</script>