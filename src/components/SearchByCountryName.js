function SearchByCountryName({ setSearchCountry }) {
  // Event Handlers
  function handleOnChange(e) {
    setSearchCountry(e.target.value)
  }
  function handleOnSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
      <form
        className="ui form"
        onSubmit={handleOnSubmit}
      >
        <div className="field">
          <label htmlFor='name'></label>
          <input
            type='text'
            id='name'
            placeholder=" Search by Country Name"
            onChange={handleOnChange}
            autoFocus
          />
        </div>
      </form>
    </div>
  )
}

export default SearchByCountryName;
