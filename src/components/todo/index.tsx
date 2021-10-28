import "./style.scss";

type Props = {
  title: string;
  isCompleted: boolean;
  onRemove: () => void;
  onChange: () => void;
};

export default function Todo(props: Props) {
  return (
    <div className="todo">
      <p className="todo-title">{props.title}</p>
      <div className="todo-actions">
        <input type="checkbox" checked={props.isCompleted} onChange={props.onChange}/>
        <div className="todo-remove" onClick={props.onRemove}>❌</div>
      </div>
    </div>
  );
}
