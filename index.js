import { Select } from './select/Select';
import './select/styles.scss';

const select = new Select('#select', {
    placeholder: 'Select an item'
});


window.s = select;
