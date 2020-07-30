import {Operators} from '../components/operators';
import FormField from '../components/formField';

interface IRoute{
    path:string,
    exact?:boolean,
    component: any,
}

export const routes:IRoute[]=[
{
    path: '/',
    component: Operators
},
{
    path:"/numberinput",
    exact:true,
    component: FormField,
}
]

