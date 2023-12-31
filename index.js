import { Select } from './select/Select';
import './select/styles.scss';

const select = new Select('#select', {
    placeholder: 'Select an item',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'Next'},
        {id: '5', value: 'Nest'},
        {id: '6', value: 'React Native'},
        {id: '7', value: 'Deno'},
    ],
    onSelect(item) {
        console.log('Selcted item', item);
    }
});


window.s = select;
