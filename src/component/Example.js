import React, {Component} from 'react';

class Example extends Component {

    render() {
        const {t} = this.props;
        return (
            <div>
                <p>{t.phoneNumber} </p>
                <p>{t.password} </p>
                <p>{t.signIn}</p>

            </div>
        );
    }


}

export default Example;
