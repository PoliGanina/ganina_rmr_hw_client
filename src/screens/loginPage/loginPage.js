import FormComponent from '../../features/form/form';

const LoginPage = ({handleLogin}) => {
    return (
          <FormComponent onSubmit={handleLogin}/>
    )
}

export default LoginPage;