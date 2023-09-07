import { useNavigation } from "react-router-dom"

useNavigation

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation(text)
  const isSubmitting = navigation.state === "submitting"

  return (
    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  )
}

export default SubmitBtn
