import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Search, MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <span className="text-xl font-bold text-primary">Ameribank</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Personas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/personas/cuentas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cuentas</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Cuentas de ahorro y cheques
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/personas/tarjetas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Tarjetas de Crédito</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Encuentra la tarjeta perfecta
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/personas/creditos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Créditos</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Personales, auto, hipotecario
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/personas/inversiones" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Inversiones</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Haz crecer tu dinero
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Empresas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/empresas/cuentas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cuentas Empresariales</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Soluciones para tu negocio
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/empresas/creditos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Créditos Empresariales</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Financia el crecimiento
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/empresas/servicios" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Servicios</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Nómina, seguros y más
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/acerca" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Acerca del Banco
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <MapPin className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link to="http://localhost:8081/login.html">Acceder</Link>
            </Button>
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="http://localhost:8081/login.html">Acceso Administrativo</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              <Link to="/personas" className="text-sm font-medium hover:text-primary">
                Personas
              </Link>
              <Link to="/empresas" className="text-sm font-medium hover:text-primary">
                Empresas
              </Link>
              <Link to="/acerca" className="text-sm font-medium hover:text-primary">
                Acerca del Banco
              </Link>
              <Button variant="outline" className="w-full" asChild>
                <Link to="http://localhost:8081/login.html">Acceder</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="http://localhost:8081/login.html">Acceso Administrativo</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
