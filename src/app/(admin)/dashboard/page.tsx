import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Dashboard page',
};

export default function DashboardPage() {
  return <h1>This is a Dashboard Page</h1>;
}
