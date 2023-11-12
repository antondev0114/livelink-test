import { ReactNode } from 'react';

export interface IListItem {
  name: string;
  role: string;
  description: string;
}

export interface ListItemProps {
  name: string;
  role: string;
  description: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}
