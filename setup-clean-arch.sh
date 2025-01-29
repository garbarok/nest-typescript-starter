#!/bin/bash

# Create main directories
mkdir -p src/{application,domain,infrastructure,interfaces}

# Application layer
mkdir -p src/application/{ports,use-cases,dtos}

# Domain layer
mkdir -p src/domain/{entities,value-objects,events,repositories,exceptions,services}

# Infrastructure layer
mkdir -p src/infrastructure/{config,persistence,http,security,logging}
mkdir -p src/infrastructure/persistence/{repositories,migrations,schemas}

# Interfaces layer
mkdir -p src/interfaces/{http,events,commands}
mkdir -p src/interfaces/http/{controllers,middlewares,dtos}

# Create basic files to maintain git structure
touch src/application/ports/.gitkeep
touch src/application/use-cases/.gitkeep
touch src/application/dtos/.gitkeep

touch src/domain/entities/.gitkeep
touch src/domain/value-objects/.gitkeep
touch src/domain/events/.gitkeep
touch src/domain/repositories/.gitkeep
touch src/domain/exceptions/.gitkeep
touch src/domain/services/.gitkeep

touch src/infrastructure/config/.gitkeep
touch src/infrastructure/persistence/repositories/.gitkeep
touch src/infrastructure/persistence/migrations/.gitkeep
touch src/infrastructure/persistence/schemas/.gitkeep
touch src/infrastructure/http/.gitkeep
touch src/infrastructure/security/.gitkeep
touch src/infrastructure/logging/.gitkeep

touch src/interfaces/http/controllers/.gitkeep
touch src/interfaces/http/middlewares/.gitkeep
touch src/interfaces/http/dtos/.gitkeep
touch src/interfaces/events/.gitkeep
touch src/interfaces/commands/.gitkeep

mkdir -p src/contexts/shared/{application,domain,infrastructure,interfaces}
mkdir -p src/contexts/shared/application/{use-cases,ports,dtos}
mkdir -p src/contexts/shared/domain/{entities,value-objects,events,repositories}
mkdir -p src/contexts/shared/infrastructure/{persistence,http}
mkdir -p src/contexts/shared/interfaces/http/{controllers,dtos}


mkdir -p src/contexts/auth/{application,domain,infrastructure,interfaces}
mkdir -p src/contexts/auth/application/{use-cases,ports,dtos}
mkdir -p src/contexts/auth/domain/{entities,value-objects,events,repositories}
mkdir -p src/contexts/auth/infrastructure/{persistence,http}
mkdir -p src/contexts/auth/interfaces/http/{controllers,dtos}

mkdir -p src/contexts/users/{application,domain,infrastructure,interfaces}
mkdir -p src/contexts/users/application/{use-cases,ports,dtos}
mkdir -p src/contexts/users/domain/{entities,value-objects,events,repositories}
mkdir -p src/contexts/users/infrastructure/{persistence,http}
mkdir -p src/contexts/users/interfaces/http/{controllers,dtos}
