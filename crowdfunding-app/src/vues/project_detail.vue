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
                            <li class="nav-item"><router-link :to="{path: '/login_home'}" class="nav-link" >&nbsp&nbsp&nbsp&nbsp<span class="fa fa-home fa-lg"></span> Home</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_about'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbspAbout</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_project'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-list fa-lg"></span> Project</router-link></li>
                            <li class="nav-item"><router-link :to="{path: '/login_contact'}" class="nav-link">&nbsp&nbsp&nbsp&nbsp<span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
                        </ul>
                        <div v-if="session_flag">
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
                            <span class="navbar-text col-12 col-lg-2" v-if="!session_flag">
                            <a data-toggle="modal" data-target="#loginModal">
                            <span class="fa fa-sign-in fa-lg"></span>
                            <span> Log in</span></a>
                            </span>
                            <span class="navbar-text col-12 col-lg-2" v-if="!session_flag">
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
        <div>
            <br>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-12">
                        <h3>Details</h3>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <h5 style="font-family: 'Times New Roman';font-style: italic">&nbsp&nbsp&nbsp&nbspProject Logo</h5>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-4 col-8"><img :src="'http://localhost:4941/api/v2/'+pro_detail.imageUri" height="200" width="200" onerror="javascript:this.src='/src/img/default.png'; this.onerror=null;">
                        <br><br>
                    </div>
                    <div v-if="this.$session.get('pro_status')=='my_project'" class="col-lg-12 col-12">
                        <button class="btn-sm btn btn-primary" data-toggle="modal" data-target="#change_image_modal">Change Logo</button>
                    </div>
                </div>
                <br>
                <hr>
                <div class="table-responsive table-striped">
                <table class="table">
                    <thead>
                    <tr class="row">
                        <h5 style="font-family: 'Times New Roman';font-style: italic">&nbsp&nbsp&nbsp&nbspProject Basic</h5>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Title</th>
                        <td class="col-6 col-lg-5">{{pro_detail.title}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Subtitle</th>
                        <td class="col-6 col-lg-5">{{pro_detail.subtitle}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Creators</th>
                        <td class="col-6 col-lg-5" v-for="creator in pro_detail.creators">{{creator.username}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Creation Date</th>
                        <td class="col-6 col-lg-5">{{newDate.toLocaleDateString()}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Description</th>
                        <td class="col-6 col-lg-5">{{pro_detail.description}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Target</th>
                        <td class="col-6 col-lg-5">{{pro_detail.target}}</td>
                    </tr>
                    </tbody>
                    <hr>
                    <thead>
                    <tr class="row">
                        <h5 style="font-family: 'Times New Roman';font-style: italic">&nbsp&nbsp&nbsp&nbspRewards</h5>
                    </tr>
                    </thead>
                    <tbody>
                    <div v-for="reward in pro_detail.rewards">
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Amount</th>
                        <td class="col-6 col-lg-5">{{reward.amount}}</td>
                    </tr>
                        <tr class="row">
                            <th class="col-6 col-lg-5 text-center">Description</th>
                            <td class="col-6 col-lg-5">{{reward.description}}</td>
                        </tr>
                    </div>
                    </tbody>
                    <hr>
                    <thead>
                    <tr class="row">
                        <h5 style="font-family: 'Times New Roman';font-style: italic">&nbsp&nbsp&nbsp&nbspProgress</h5>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Current Pledge</th>
                        <td class="col-6 col-lg-5">{{pro_detail.progress.currentPledged}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Backer Nums</th>
                        <td class="col-6 col-lg-5">{{pro_detail.progress.numberOfBackers}}</td>
                    </tr>
                    </tbody>
                    <hr>
                    <thead>
                    <tr class="row">
                        <h5 style="font-family: 'Times New Roman';font-style: italic">&nbsp&nbsp&nbsp&nbspBackers Detail</h5>
                        <h6 style="font-family: 'Times New Roman'">&nbsp&nbsp&nbsp&nbsp(Only show latest 5 backers)</h6>
                    </tr>
                    </thead>
                    <tbody>
                    <div v-for="backer in backers">
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Username</th>
                        <td class="col-6 col-lg-5">{{backer.username}}</td>
                    </tr>
                    <tr class="row">
                        <th class="col-6 col-lg-5 text-center">Amount</th>
                        <td class="col-6 col-lg-5">{{backer.amount}}</td>
                    </tr>
                    </div>
                    </tbody>
                    <hr>
                    <tfoot>
                        <div v-if="!session_flag">
                            <span>Login to create a new project or make a pledge</span><br><br>
                            <button class="btn-sm btn btn-warning col-3 col-lg-2" type="back" @click="last_page()">Back</button>
                        </div>
                        <div v-if="this.$session.get('pro_status')=='my_project'">
                            <button class="btn-sm btn btn-primary col-3 col-lg-2" type="button" data-toggle="modal" data-target="#modify_rewards_modal">Modify</button>
                            <button class="btn-sm btn btn-danger col-3 col-lg-2" type="button" data-toggle="modal" data-target="#close_project_modal">Close</button>
                            <button class="btn-sm btn btn-warning col-3 col-lg-2" type="back" @click="last_page()">Back</button>
                        </div>
                        <div v-if="this.$session.get('pro_status')=='make_pledge'">
                            <button class="btn-sm btn btn-primary col-3 col-lg-2" type="button" data-toggle="modal" data-target="#make_pledge_modal">Pledge</button>
                            <button class="btn-sm btn btn-warning col-3 col-lg-2" type="back" @click="last_page()">Back</button>
                        </div>
                        <div v-if="this.$session.get('pro_status')=='my_pledge'">
                            <button class="btn-sm btn btn-warning col-3 col-lg-2" type="back" @click="last_page()">Back</button>
                        </div>
                    </tfoot>
                </table>
                </div>

            </div>
        </div>
        <div id="footer" class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-5 offset-1 col-lg-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><router-link :to="{path: '/login_home'}"><span class="fa fa-home fa-lg"></span> &nbspHome</router-link></li>
                            <li><router-link :to="{path: '/login_about'}">&nbsp<span class="fa fa-info fa-lg"></span>&nbsp&nbsp&nbsp&nbspAbout</router-link></li>
                            <li><router-link :to="{path: '/login_project'}"><span class="fa fa-list fa-lg"></span> &nbspProject</router-link></li>
                            <li><router-link :to="{path: '/login_contact'}"><span class="fa fa-address-card fa-lg"></span> Contact</router-link></li>
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
            <!-- close_project_modle -->
        <div id="close_project_modal" class="modal fade" role="dialog">
            <div class="modal-dialog" role="content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Close Project</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <h5 style="font-weight: bold; font-family: 'Times New Roman', Times, serif;">&nbsp&nbsp&nbsp&nbspAre you sure to close this project?</h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning btn-sm" @click="close_project()">Yes</button>
                                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">No</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- modify_rewards_modle -->
        <div id="modify_rewards_modal" class="modal fade" role="dialog">
            <div class="modal-dialog" role="content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modify Rewards</h4>
                        <button type="button" class="close" data-dismiss="modal" @click="default_modify_rewards_modal()">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div :index="index_reward" v-for="(amount, index_reward) in reward_amount">
                                <div class="form-group row">
                                    <label class="col-5 col-lg-3 col-form-label">Amount</label>
                                    <div class="col-7 col-lg-7">
                                        <input type="text" class="form-control" name="reward_amount" placeholder="Amount" v-model="reward_amount[index_reward]">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-lg-3 col-form-label">Description</label>
                                    <div class="col-7 col-lg-7">
                                        <textarea type="text" class="form-control" rows="5" name="reward_desc" placeholder="Description" v-model="reward_desc[index_reward]"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <button class="btn btn-primary btn-sm text-white offset-1 col-4" type="button" @click="add_reward()">Add</button>
                                <label style="color:red" class="col">{{error_msg}}</label>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm" @click="modify_rewards()">Modify</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_modify_rewards_modal()">Cancle</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- make_pledge_modle -->
        <div id="make_pledge_modal" class="modal fade" role="dialog">
            <div class="modal-dialog" role="content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Make Pledge</h4>
                        <button type="button" class="close" data-dismiss="modal" @click="default_modify_rewards_modal()">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                                <div class="form-group row">
                                    <label class="col-5 col-lg-3 col-form-label">Amount</label>
                                    <div class="col-7 col-lg-7">
                                        <input type="text" class="form-control" name="pledge_amount" placeholder="Amount" v-model="pledge_amount">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-lg-3 col-form-label">Card No.<span style="color:red">*</span></label>
                                    <div class="col-7 col-lg-7">
                                        <input type="text" class="form-control" name="reward_desc" placeholder="Card No." v-model="card_no">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-lg-3 col-form-label">Anonymous</label>
                                    <div class="col-7 col-lg-7">
                                        <select id="anonymous" name="anonymous" class="selectpicker selcls">
                                            <option value=1>Yes</option>
                                            <option value=0 selected>No</option>
                                        </select>
                                    </div>
                                </div>
                            <div class="form-group row">
                                <label style="color:red" class="col">{{pledge_error_msg}}</label>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm" @click="make_pledge()">Pledge</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="default_make_pledge_modal()">Cancle</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- change_image_modle -->
        <div class="modal fade" id="change_image_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Change Logo</h4>
                        <button type="button" class="close" data-dismiss="modal" @click="">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                            <div>
                            <img alt="Image Preview" id="previewer" :src="dataUrl">
                        </div>
                        <div>
                            <br>
                            <input id="change_logo" type="file" class="file" @change="handleFileChange()">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <label style="color:red">{{image_error_msg}}</label>
                        <button class="btn btn-sm btn-primary" @click="change_logo()">Update</button>
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
                my_projects: [],
                pro_status: this.$session.get('pro_status'),
                project_id: this.$route.params.pro_id,
                pro_detail: {},
                newDate: new Date(),
                session_flag: this.$session.exists(),
                reward_amount: [''],
                reward_desc:[''],
                error_msg:'',
                pledge_amount:0,
                card_no:'',
                pledge_error_msg:'',
                image_error_msg:'',
                file : null,
                logo:null,
                dataUrl:'',
                backers:[]
            }
        },
        mounted: function () {
            this.get_project_detail();
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
                            }

                    },
                ).then(function(res){
                    this.$router.push({path: '/'});
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
            get_project_detail() {
                this.$http.get('http://localhost:4941/api/v2/projects/'+this.project_id)
                    .then(function (res) {
                        this.pro_detail=res.body;
                        var timestamp = this.pro_detail.creationDate;
                        this.newDate.setTime(timestamp);
                        if(this.pro_detail.length!=0){
                            for(let i in this.pro_detail.backers){
                                if(i>this.pro_detail.backers.length-6){
                                    this.backers.push(this.pro_detail.backers[i]);
                                }
                            }
                        }
                    });
            },
            close_project(){
                this.$http.put('http://localhost:4941/api/v2/projects/'+this.project_id,
                    {
                    "open": false
                    },
                    {
                    headers:
                        {
                            'X-Authorization': this.$session.get('token')
                        }
                    }
                ).then(function(res){
                    $("#close_project_modal").modal('hide');
                    this.$router.push({path: '/my_project'});
                });
            },
            add_reward(){
                if(this.reward_amount.length<4) {
                    this.reward_amount.push('');
                    this.reward_desc.push('');
                }
            },
            default_modify_rewards_modal(){
                this.reward_amount=[''];
                this.reward_desc=[''];
                this.error_msg='';
            },
            modify_rewards(){
                let rewards =[];
                for (let num in this.reward_amount) {

                    if (this.reward_amount[num] != '' && this.reward_desc[num] != '')
                    {
                        let json_array =
                            {
                                "amount":parseInt(this.reward_amount[num]),
                                "description":this.reward_desc[num]
                            };
                        rewards.push(json_array);
                    }
                }
//                let result = jQuery.parseJSON(JSON.stringify(rewards));
                this.$http.put('http://localhost:4941/api/v2/projects/'+this.project_id+'/rewards',
                        rewards,
                    {
                        headers:
                            {
                                'X-Authorization': this.$session.get('token')
                            }
                    })
                .then(function (res) {
                    this.$router.go(0);
                }, function (err) {
                    this.error_msg='fault';
                });
            },
            last_page(){
                this.$router.go(-1);
            },
            make_pledge(){
                let ano_flag = $('#anonymous').val();
                let ano=false;
                if(ano_flag==1){
                    ano=true;
                }
                if(this.card_no==''){
                    this.pledge_error_msg='Card no cannot be empty';
                }else{
                let pledge_json =
                    {
                        "id": this.user_id,
                        "amount": parseInt(this.pledge_amount),
                        "anonymous": ano,
                        "card": {
                            "authToken": this.card_no
                        }
                    };
                this.$http.post('http://localhost:4941/api/v2/projects/'+this.project_id+'/pledge',
                    pledge_json,
                    {
                        headers:
                            {
                                'X-Authorization': this.$session.get('token')
                            }
                    }
                ).then(function (res) {
                    this.$session.set('pro_status','my_pledge');
                    this.$router.go(0);
                }, function (err) {
                    this.pledge_error_msg='fault';
                });
                }
            },
            default_make_pledge_modal(){
                this.pledge_amount=0;
                this.card_no='';
                this.pledge_error_msg='';
                $('#anonymous').val(0);
            },
            change_logo(){
                    if(this.file==null){
                        this.image_error_msg='please choose a file';
                    }else if(this.file.type!="image/png"&&this.file.type!="image/jpeg"){
                        this.image_error_msg='file type must be PNG or JPEG';
                        this.file=null;
                    }else{
                        this.$http.put('http://localhost:4941/api/v2/projects/'+this.project_id+'/image',
                            this.file,
                            {
                                headers:
                                    {
                                        'Content-Type': 'image/png'||'image/jpeg',
                                        'X-Authorization': this.$session.get('token')
                                    }
                            }
                        ).then(function (res) {
                            this.file=null;
                            this.$router.go(0);
                        });
                    }

                },
            img_preview(file){
                let self = this;
                this.image_error_msg='';
                if(file.type=="image/png" || file.type=="image/jpeg"){
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        self.dataUrl = this.result;
                    }
                }else{
                    this.image_error_msg='file type must be PNG or JPEG';
                }
            },
            handleFileChange(e){
                this.file = $(this.$el).find('#change_logo')[0].files[0];
                this.img_preview(this.file);
            }


            }


    }
//        var filechooser = document.getElementById('change_logo');
//        var previewer = document.getElementById('previewer');
//        filechooser.onchange = function () {
//            var file = this.files[0];
//            if(file.type!="image/png"&&file.type!="image/jpeg"){
//                return;
//            }else{
//                var reader = new FileReader();
//                reader.onloadend = function () {
//                    previewer.src = this.result;
//                }
//                reader.readAsDataURL(file);
//            }
//        }




</script>
