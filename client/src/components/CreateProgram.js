const CreateProgram = ({ onChangeForm, createProgram }) => {
  return (
    <div>
      <h2>Create Program</h2>
      <form>
        <div>
          <label>Instructor ID</label>
          <input
            type="text"
            onChange={(e) => onChangeForm(e)}
            name="instructorId"
            id="instructorId"
            placeholder="Instructor ID"
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => onChangeForm(e)}
            name="title"
            id="title"
            placeholder="Title"
          />
        </div>
        <button type="button" onClick={(e) => createProgram()}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProgram;
