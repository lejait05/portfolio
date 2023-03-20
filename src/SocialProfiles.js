import React, {Component} from 'react';
import SOCIAL_PROFILES from "./data/socialProfiles";


class SocialProfile extends Component {
    render() {
        console.log('this.props', this.props);
        const {link, image} = this.props.SocialProfile;
        return (
            <div style={{display: 'inline-block', width: 300, margin: 10}}>
                <img src={image} alt='socialProfile' style={{width: 200, height: 120}}/>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Social Profiles</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                                <SocialProfile key={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;
