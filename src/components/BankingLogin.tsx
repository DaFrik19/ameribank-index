import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BankingLogin = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Online Banking */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Banca en Línea</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ingresa a tu cuenta y gestiona tus finanzas desde cualquier lugar
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild>
                  <Link to="/login">Acceder</Link>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/registro">Regístrate</Link>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <Link to="/ayuda/recuperar" className="hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Mobile App */}
          <Card className="border-2 bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl">App Móvil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Descarga nuestra app y lleva tu banco en el bolsillo
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Consulta saldos y movimientos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Transferencias y pagos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Notificaciones en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Touch ID y Face ID</span>
                </li>
              </ul>
              <div className="flex gap-2">
                <Button variant="secondary" className="flex-1">
                  App Store
                </Button>
                <Button variant="secondary" className="flex-1">
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
