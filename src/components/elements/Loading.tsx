interface LoadingProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
}

const Loading = ({ size: size }: LoadingProps) => {
  return (
    <div
      className="flex justify-center items-center gap-4 join"
      data-testid="loading"
    >
      <span className={`loading loading-spinner loading-${size}`}></span>
    </div>
  );
};
export default Loading;
