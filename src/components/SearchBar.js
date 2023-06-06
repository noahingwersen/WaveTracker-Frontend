import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'

const SearchBar = ({ placeholder, onChange, timeout, valueName }) => {
  const [text, setText] = useState('')
  // Filtered data should be a list of objects
  const [filteredData, setFilteredData] = useState([])
  // Passed onChange function should return a list of objects based on search bar text
  useDebounce(async () => setFilteredData(await onChange(text)), timeout, [
    text,
  ])

  const textChange = async (e) => {
    setText(e.target.value)
  }

  return (
    <div className="search-container">
      <div className="search-input">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder={placeholder}
            onChange={textChange}
            aria-describedby="search-button"
          />
          <Button variant="outline-primary" id="search-button">
            Search
          </Button>
        </InputGroup>
      </div>
      {text && (
        <div className="search-results">
          {filteredData.length > 0 &&
            filteredData.map((value, index) => {
              return (
                <Link
                  className="result-item"
                  key={index}
                  to={value.url && value.url}
                >
                  <p>{value[valueName]}</p>
                </Link>
              )
            })}
        </div>
      )}
    </div>
  )
}
export default SearchBar
