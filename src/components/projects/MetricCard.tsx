interface MetricCardProps {
  metric: string;
}

const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <div className="p-6 bg-background-secondary rounded-xl hover:shadow-sm transition-all duration-300">
      <p className="text-lg font-medium text-foreground">{metric}</p>
    </div>
  );
};

export default MetricCard;
