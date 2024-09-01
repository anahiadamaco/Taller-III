function Login() {
    return (
      <div>
        <div>
          <div>
            <h1 className="text-2xl font-bold text-black text-center">Bienvenido por favor inicie sesión</h1>
            <hr className="mt-2 bg-black shadow"></hr>
            <form>
              <p className="text-black mt-4 fond-bold">Por favor ingrese su rut</p>
              <input type="Email"  className="bg-white border border-black text-black px-4 py-2 rounded-md" autoComplete="off"></input>
              <p className="text-black mt-2">Por favor ingrese su contraseña: </p>
              <input type="password" className="bg-white border border-black text-black px-4 py-2 rounded-md" autoComplete="off"></input>
              <button type="submit" className="border border-black rounded-md w-20 h-8">
                Ingresar
              </button>
            </form>
  
          </div>
        </div>
  
        
  
      </div>
    );
  }
  
  export default Login;