const CommunicationMethod = ({ selectedMethod, setSelectedMethod }) => {
    return (
      <div>
        <label htmlFor="communicationMethod">Select Communication Method</label>
        <select
          id="communicationMethod"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <option value="">Select Method</option>
          <option value="Video Call">Video Call</option>
          <option value="Phone Call">Phone Call</option>
        </select>
      </div>
    );
  };
  
  export default CommunicationMethod;
  
  