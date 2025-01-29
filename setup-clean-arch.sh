#!/bin/bash


mkdir -p src/{
  domain/{entities,value-objects,aggregates,events,repositories,exceptions,services},
  application/{use-cases,ports,dtos,event-handlers},
  infrastructure/{config,persistence/{repositories,migrations,schemas},http,security,logging,cache},
  interfaces/{http/{controllers,middlewares,dtos},events,commands,grpc}
}


find src -type d -exec touch {}/.gitkeep \;


contexts=("auth" "tasks" "users" "shared")

for context in "${contexts[@]}"; do
  mkdir -p "src/contexts/${context}/"{
    domain/{entities,value-objects,aggregates,events,repositories,services},
    application/{use-cases,ports,dtos,event-handlers},
    infrastructure/{persistence,http,security},
    interfaces/{http,events}
  }
done


touch {Dockerfile,docker-compose.yml,.env.example,README.md}


mkdir -p arch-tests
cat << EOF > arch-tests/architecture.rules
// Reglas básicas para validar dependencias
@AnalyzeClasses(packages = "com.yourproject")
public class ArchitectureTest {
  @ArchTest
  static final ArchRule domain_should_not_depend_on_application =
    noClasses().that().resideInAPackage("..domain..")
      .should().dependOnClassesThat().resideInAPackage("..application..");

  @ArchTest
  static final ArchRule application_should_not_depend_on_infrastructure =
    noClasses().that().resideInAPackage("..application..")
      .should().dependOnClassesThat().resideInAPackage("..infrastructure..");
}
EOF


cat << EOF > validate-architecture.sh
#!/bin/bash

mvn test -Dtest=ArchitectureTest
EOF

chmod +x validate-architecture.sh

echo "Estructura creada con éxito! ✅"
echo "Mejoras incluidas:"
echo "1. ✅ Agregados 'aggregates' en capa domain"
echo "2. ✅ 'event-handlers' en application"
echo "3. ✅ Tests de arquitectura básicos"
echo "4. ✅ Contextos mejor definidos"
echo ""
echo "⚠️  Recomendaciones de uso:"
echo "1. El directorio 'shared' solo para código realmente transversal"
echo "2. Las implementaciones de repositorios van en infrastructure/persistence"
echo "3. Usar 'event-handlers' para procesamiento de domain events"
echo "4. Ejecutar './validate-architecture.sh' para validar dependencias"
