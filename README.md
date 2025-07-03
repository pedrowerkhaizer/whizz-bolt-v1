# Whizz - WhatsApp Financial Coach

A comprehensive financial management application with WhatsApp integration, built with Next.js 14, TypeScript, and Supabase.

## Features

### Core Functionality
- **Budget Management**: Envelope method with daily rollover calculations
- **Bank Connections**: Open Finance integration via Pluggy API
- **Transaction Tracking**: Automatic categorization and manual entry
- **Recurrent Expenses**: Automated scheduling and management
- **WhatsApp Integration**: Real-time alerts and financial coaching
- **Dashboard**: Comprehensive financial overview and analytics

### Technical Features
- **Authentication**: Clerk-based user management
- **Database**: Supabase with row-level security
- **Real-time Updates**: Webhook-based transaction syncing
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **Open Finance**: Pluggy API
- **Messaging**: WhatsApp Cloud API
- **Automation**: n8n workflows
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Clerk account
- Pluggy API access
- WhatsApp Business API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/whizz.git
cd whizz
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your credentials
```

4. Set up Supabase:
- Create a new Supabase project
- Run the database migrations in `supabase/migrations/`
- Set up row-level security policies

5. Configure Clerk:
- Create a Clerk application
- Set up sign-in/sign-up flows
- Configure webhook endpoints

6. Set up Pluggy:
- Register for Pluggy API access
- Configure webhook endpoints
- Set up bank connection flows

7. Run the development server:
```bash
npm run dev
```

## Database Schema

### Core Tables
- `connections`: Bank connections via Pluggy
- `categories`: Transaction categories
- `budgets`: Monthly budgets with rollover logic
- `recurrents`: Recurring transactions
- `transactions`: Financial transactions
- `v_cashflow`: Materialized view for cashflow analysis

### Authentication
- Uses Supabase Auth with Clerk integration
- Row-level security on all tables
- User-scoped data access

## API Endpoints

### Webhooks
- `POST /api/webhook/pluggy`: Handle Pluggy transaction updates
- `POST /api/webhook/whatsapp`: Handle WhatsApp message events

### Goals
- `POST /api/goals`: Create financial goals
- `GET /api/goals`: List user goals
- `PUT /api/goals/:id`: Update goal progress

## WhatsApp Integration

### Message Templates
- `budget_alert`: Budget limit notifications
- `daily_summary`: Daily financial summary
- `goal_progress`: Goal achievement updates

### Automation
- Daily rollover calculations
- Recurring transaction processing
- Alert notifications based on spending patterns

## Deployment

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds

### Database Setup
1. Create Supabase project
2. Run migrations for schema setup
3. Configure RLS policies
4. Set up materialized view refresh

### External Services
1. **Pluggy**: Set webhook URL to your deployed domain
2. **WhatsApp**: Configure webhook verification
3. **n8n**: Deploy workflow automation service

## Development

### File Structure
```
app/
├── (dashboard)/          # Protected dashboard pages
├── api/                  # API routes
├── globals.css          # Global styles
└── layout.tsx           # Root layout

components/
├── ui/                  # shadcn/ui components
├── sidebar.tsx          # Navigation sidebar
├── cashflow-chart.tsx   # Financial charts
└── budget-overview.tsx  # Budget widgets

lib/
├── supabase.ts          # Database client
├── types.ts             # TypeScript definitions
└── utils.ts             # Utility functions
```

### Key Components
- **Dashboard**: Financial overview with charts and metrics
- **Budgets**: Envelope method budget management
- **Transactions**: Manual and automated transaction handling
- **Banks**: Open Finance connection management
- **Settings**: User preferences and WhatsApp configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary and not open source.

## Support

For support, email support@whizz.app or join our community Discord.