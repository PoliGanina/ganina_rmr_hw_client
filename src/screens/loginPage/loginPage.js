import FormComponent from '../../feature/form/form';

const LoginPage = ({handleLogin}) => {
    return (
          <FormComponent onSubmit={handleLogin}/>
    )
}

export default LoginPage;