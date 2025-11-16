import { Link } from "react-router-dom";
import { CreditCard, Home, TrendingUp, Building2, Wallet, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: CreditCard,
    title: "Tarjetas de Crédito",
    description: "Encuentra la tarjeta perfecta para ti",
    link: "/personas/tarjetas",
    color: "text-primary",
  },
  {
    icon: Wallet,
    title: "Cuentas",
    description: "Ahorro y cheques con grandes beneficios",
    link: "/personas/cuentas",
    color: "text-secondary",
  },
  {
    icon: Home,
    title: "Crédito Hipotecario",
    description: "Haz realidad tu casa propia",
    link: "/personas/creditos",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description: "Haz crecer tu patrimonio",
    link: "/personas/inversiones",
    color: "text-success",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Soluciones para tu negocio",
    link: "/empresas",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Protege lo que más importa",
    link: "/personas/seguros",
    color: "text-primary",
  },
];

export const ProductsSection = () => {
  return (
    <section className="bg-banking-gray-light py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nuestros Productos</h2>
          <p className="text-lg text-muted-foreground">
            Encuentra la solución financiera perfecta para ti
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <Icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{product.title}</h3>
                  <p className="mb-4 text-muted-foreground">{product.description}</p>
                  <Button variant="link" className="p-0 text-primary" asChild>
                    <Link to={product.link}>
                      Conocer más →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
