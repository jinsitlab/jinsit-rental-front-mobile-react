# Clean Architecture 구조 사용
```css
[ Frameworks & Drivers ]
        ↓
[ Interface Adapters ]
        ↓
[ Use Cases ]
        ↓
[ Entities ]
```

# 프로젝트 구조
전체 폴더 구조
```css
src/
├─ app/                # Frameworks & Drivers
│  ├─ App.tsx          # App Composition Root
│  ├─ router.tsx       # Routing (React Router)
│  └─ providers.tsx    # Global Providers
│
├─ screens/            # Frameworks & Drivers (Screen / Feature Layer)
│  ├─ login/
│  │  ├─ LoginScreen.tsx   # UI
│  │  ├─ login.store.ts    # Interface Adapter (Zustand Store)
│  │  └─ login.types.ts    # Screen-specific Types
│  │
│  └─ order/
│     ├─ OrderScreen.tsx   # UI
│     ├─ order.store.ts    # Interface Adapter (Zustand Store)
│     ├─ order.mapper.ts   # Interface Adapter (Data Mapper)
│     ├─ order.types.ts    # Screen-specific Types
│     └─ order.constants.ts# Constants
│
├─ domain/             # Entities & Use Cases
│  └─ order/
│     ├─ order.model.ts    # Entity
│     ├─ order.usecases.ts # Use Cases
│     └─ order.validators.ts # Domain Rules / Validation
│
├─ services/           # Interface Adapters (API Layer)
│  └─ order.api.ts     # API Adapter
│
├─ components/         # Frameworks & Drivers (Reusable UI)
│
├─ utils/              # Shared Utilities (Crypto, Format, etc.)
│
└─ styles/             # Global Styles
```

# Store
Zustand 사용
