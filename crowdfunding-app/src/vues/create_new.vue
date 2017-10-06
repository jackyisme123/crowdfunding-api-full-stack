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
                        <h3>Create a new project</h3>
                        <hr>
                    </div>
                </div>
                <div class="row row-content">
                    <div class="col-12">
                        <form>
                            <div class="form-group row">
                                <h5>&nbsp&nbspProject Detail</h5>
                            </div>
                            <div class="form-group row">
                                <label for="pro_title" class="col-5 col-lg-2 col-form-label">Project Title<span style="color:red">*</span></label>
                                <div class="col-7 col-lg-7">
                                    <input type="text" class="form-control" id="pro_title" name="pro_title" placeholder="Project Title" v-model="pro_title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="pro_subtitle" class="col-5 col-lg-2 col-form-label">Project Subtitle<span style="color:red">*</span></label>
                                <div class="col-7 col-lg-7">
                                    <input type="text" class="form-control" id="pro_subtitle" name="pro_subtitle" placeholder="Project Subtitle" v-model="pro_subtitle">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="pro_target" class="col-5 col-lg-2 col-form-label">Target<span style="color:red">*</span></label>
                                <div class="col-7 col-lg-7">
                                    <input type="text" class="form-control" id="pro_target" name="pro_target" placeholder="Target" v-model="pro_target">
                                </div>
                            </div>
                            <div class="form-group row" id="creators">
                                <label class="col-5 col-lg-2 col-form-label">Creator ID<span style="color:red">*</span></label>
                                <div :index="index" class="col-5 col-lg-2" v-for="(creator,index) in creators">
                                    <input type="text" class="form-control" name="creator_id" placeholder="Creator ID" v-model="creators[index]">
                                </div>
                                <div col-lg-1><span class="fa fa-plus-circle col-12" style="color:green" @click="creator_plus()"></span><span class="fa fa-minus-circle col-12" style="color:red" @click="creator_minus()"></span></div>
                            </div>
                            <div class="form-group row">
                                <label for="pro_desc" class="col-5 col-lg-2 col-form-label">Description</label>
                                <div class="col-7 col-lg-7">
                                    <textarea type="text" class="form-control" rows="5" id="pro_desc" name="pro_desc" placeholder="Description" v-model="pro_desc"></textarea>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <h5>&nbsp&nbspRewards Detail (optional)</h5>
                            </div>
                            <div :index="index_reward" v-for="(amount, index_reward) in reward_amount">
                            <div class="form-group row">
                                <label class="col-5 col-lg-2 col-form-label">Amount</label>
                                <div class="col-7 col-lg-7">
                                    <input type="text" class="form-control" name="reward_amount" placeholder="Amount" v-model="reward_amount[index_reward]">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-5 col-lg-2 col-form-label">Description</label>
                                <div class="col-7 col-lg-7">
                                    <textarea type="text" class="form-control" rows="5" name="reward_desc" placeholder="Description" v-model="reward_desc[index_reward]"></textarea>
                                </div>
                            </div>
                            </div>
                            <button class="btn btn-primary btn-sm text-white" type="button" @click="add_reward()">Add new</button>
                            <br>
                            <hr>
                            <div class="form-group row">
                                <label class="col-lg-6 col-5" style="color:red">{{error_msg}}</label>

                                <div class="col-lg-1 col-3">

                                    <button type="button" class="btn btn-primary" @click="create_new()">
                                        Submit
                                    </button>
                                </div>
                                &nbsp&nbsp&nbsp&nbsp
                                <div class="col-lg-1 col-3">
                                    <button type="button" class="btn btn-warning" @click="default_create_new()">
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
                            <li><router-link :to="{path: './login_about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
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
                user_id:this.$session.get('id'),
                login_username:this.$session.get('username'),
                session_token: this.$session.get('token'),
                pro_title: '',
                pro_subtitle:'',
                pro_target:'',
                pro_desc:'',
                reward_amount:[''],
                reward_desc:[''],
                error_msg:'',
                creators: [''],

            }
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
                    this.$router.push({path: './'});
                    this.$session.destory();
                }, function (err) {
                    console.log(err);
                })
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
            default_create_new(){
                this.pro_title= '';
                this.pro_subtitle='';
                this.pro_target='';
                this.pro_desc='';
                this.reward_amount=[''];
                this.reward_desc=[''];
                this.error_msg='';
                this.creators=[''];
            },
            create_new(){
                let creators1 = [];
                for(let creator_id of this.creators){
                    if(creator_id!='') {
                        creators1.push({"id": parseInt(creator_id)});
                    }
                }
                let rewards =[];
                for (let num in this.reward_amount) {
                    if (this.reward_amount[num] != ''||this.reward_desc[num]!='') {
                        rewards.push({"amount": parseInt(this.reward_amount[num])},{"description": this.reward_desc[num]});
                    }
                }
                if(this.pro_title!=''&&this.pro_subtitle!=''&&this.pro_target!=''&&creators1.length!=0){
                    this.$http.post('http://localhost:4941/api/v2/projects/',
                        {
                            "title":this.pro_title,
                            "subtitle":this.pro_subtitle,
                            "description": this.pro_desc,
                            "target": parseInt(this.pro_target),
                            "creators": creators1,
                            "rewards": rewards
                        },
                        {
                            headers: {
                                'X-Authorization': this.$session.get('token')
                            }
                        }).then(function (res) {
                        this.default_create_new();
                        this.$router.push({path:'./my_project'});
                    }, function (err) {
                        this.error_msg='Error';
                    })
                }else{
                    this.error_msg='red* options can not be empty';
                }

            },
            creator_plus(){
                if(this.creators.length <4){
                    this.creators.push('');
                }
            },
            creator_minus(){
                if(this.creators.length >1){
                    this.creators.pop();
                }
            },
            add_reward(){
                if(this.reward_amount.length<4) {
                    this.reward_amount.push('');
                    this.reward_desc.push('');
                }
            }


        }
    }
</script>