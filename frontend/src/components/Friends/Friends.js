import unknownUser from '../../images/unknownUser.jpg';
import "./Friends.css";

export default function Friends() {

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 align-self-center" align="center">
                    <div>
                        <h2>
                            Suggested native Korean students in your major: Computer Science
                        </h2>
                    </div>
                    <div class="people-nearby">
                        <div class="nearby-user">
                            <div class="row">
                                <div class="col-md-2 col-sm-2">
                                    <img src={unknownUser} alt="user" class="profile-photo-lg" />
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    <h5><a href="#" class="profile-link">Yoon Ji-hye</a></h5>
                                    <p className='bio-paragraph'>I like to work on software and make connections!</p>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <button class="login-button">Add Friend</button>
                                </div>
                            </div>
                        </div>
                        <div class="nearby-user">
                            <div class="row">
                                <div class="col-md-2 col-sm-2">
                                    <img src={unknownUser} alt="user" class="profile-photo-lg" />
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    <h5><a href="#" class="profile-link">Kim Soo-yeon</a></h5>
                                    <p className='bio-paragraph'>Passionate about code and coffee! Let's grab coffee together?</p>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <button class="login-button">Add Friend</button>
                                </div>
                            </div>
                        </div>
                        <div class="nearby-user">
                            <div class="row">
                                <div class="col-md-2 col-sm-2">
                                    <img src={unknownUser} alt="user" class="profile-photo-lg" />
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    <h5><a href="#" class="profile-link">Park Ji-woo</a></h5>
                                    <p className='bio-paragraph'>I want to get to know people from all over the world :D</p>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <button class="login-button">Add Friend</button>
                                </div>
                            </div>
                        </div>
                        <div class="nearby-user">
                            <div class="row">
                                <div class="col-md-2 col-sm-2">
                                    <img src={unknownUser} alt="user" class="profile-photo-lg" />
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    <h5><a href="#" class="profile-link">Lee Hye-jin</a></h5>
                                    <p className='bio-paragraph'>Tech geek</p>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <button class="login-button">Add Friend</button>
                                </div>
                            </div>
                        </div>
                        <div class="nearby-user">
                            <div class="row">
                                <div class="col-md-2 col-sm-2">
                                    <img src={unknownUser} alt="user" class="profile-photo-lg" />
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    <h5><a href="#" class="profile-link">Kang Tae-joon</a></h5>
                                    <p className='bio-paragraph'>I'm a CS student! I want to make friends here</p>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <button class="login-button">Add Friend</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}