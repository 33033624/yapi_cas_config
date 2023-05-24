import React, { PureComponent as Component } from 'react';
import { casConfigActions } from '../reducer/modules/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(
  () => {
    return {};
  },
  {
    casConfigActions
  }
)
class CasButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      casConfig: {}
    };
  }
  static propTypes = {
    casConfigActions: PropTypes.func
  };
  componentDidMount() {
    this.props.casConfigActions().then(res => {
      if (res.payload.data.errcode == 0) {
        this.setState({
          casConfig: res.payload.data.data
        });
      }
    });
  }

  qualifyURL = (url, encode) => {
    url = url || '';
    let ret =
      location.protocol +
      '//' +
      location.host +
      (url.substr(0, 1) === '/' ? '' : location.pathname.match(/.*\//)) +
      url;
    if (encode) {
      ret = encodeURIComponent(ret);
    }
    return ret;
  };

  handleLogin = () => {
    const { LOGIN_SERVER } = this.state.casConfig;
    const loginURI = '/api/user/login_by_token';
    let ret = this.qualifyURL(loginURI, true);
    let redirectURL = LOGIN_SERVER + '?service=' + ret;
    location.href = redirectURL;
  };

  render() {
    const { open } = this.state.casConfig;

    return open ? (
      <button onClick={this.handleLogin} className='btn-home btn-home-normal'>
        PORTAL 登录
      </button>
    ) : null;
  }
}

export default CasButton;
