import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Acerca del Banco</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/acerca" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/acerca/mision" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link to="/acerca/responsabilidad" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Responsabilidad Social
                </Link>
              </li>
              <li>
                <Link to="/acerca/carreras" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/personas/tarjetas" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Tarjetas de Crédito
                </Link>
              </li>
              <li>
                <Link to="/personas/cuentas" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Cuentas
                </Link>
              </li>
              <li>
                <Link to="/personas/creditos" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Créditos
                </Link>
              </li>
              <li>
                <Link to="/personas/inversiones" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Inversiones
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ayuda/preguntas" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/ayuda/contacto" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/ayuda/sucursales" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Sucursales
                </Link>
              </li>
              <li>
                <Link to="/ayuda/quejas" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Quejas y Sugerencias
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/legal/privacidad" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal/terminos" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/legal/seguridad" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Seguridad
                </Link>
              </li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© 2024 Ameribank. Proyecto educativo para estudiantes. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Este es un proyecto de simulación con fines educativos. No es un banco real.
          </p>
        </div>
      </div>
    </footer>
  );
};
