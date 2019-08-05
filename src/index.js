import _ from 'lodash';
import './index.scss';
import {MDCRipple} from '@material/ripple/index';


const buttonRipple = [].map.call(document.querySelectorAll('.foo-button'), function(el) {
    return new MDCRipple(el);
});
  