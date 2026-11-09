// ISSO AQUI É TEMPORÁRIO
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { usuario, logout } = useAuth();
  return (
    <div style={{ padding: 24 }}>
      <h1>Olá, {usuario?.nome}!</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
