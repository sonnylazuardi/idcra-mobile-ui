import { Container } from 'unstated'
class StudentContainer extends Container {
  state = {
    school: null,
  }
  selectSchool = school => {
    this.setState({
      school,
    });
  }
}
export {
  StudentContainer
}