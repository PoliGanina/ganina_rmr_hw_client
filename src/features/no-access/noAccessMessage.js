import './noAccessMessage.scss';

const NoAccessMessage = ()=> {
    return (
        <div className='no-access'>
            <h2 className='no-access__text'> Sorry, this page is available only upon login</h2>
        </div>
    );
}
export default NoAccessMessage;