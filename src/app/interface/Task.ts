export interface Task {
  id?: string; // El ID es opcional porque Firebase lo genera automáticamente
  title: string;
  description: string;
  date: string;
  completed: boolean;
}