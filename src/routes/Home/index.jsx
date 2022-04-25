import React, { useEffect, useState, useCallback } from 'react'

// external libs
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';

// styles
import { Container, ContainerCenter, Title } from './styles';

// components
import Card from '../../components/Card';
import Pagination from "../../components/Pagination";
import ButtonSeven from '../../components/Button/index';

// API
import API from "../../services";

function Home() {
  const { t } = useTranslation();

  const [userList, setUserList] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 30,
  });

  async function getData() {
    try {
      const result = await API.get("/users");

      setUserList(result.data.data);
      setOriginalList(result.data.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const { currentPage, usersPerPage } = pagination;

  useEffect(() => {
    const indexOfLastUsers = currentPage * usersPerPage;
    const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
    const current = userList.slice(indexOfFirstUsers, indexOfLastUsers);
    setCurrentUsers(current);
  }, [currentPage, usersPerPage, userList]);

  const handlePaginate = useCallback(
    (pageNum) => {
      setPagination({ ...pagination, currentPage: pageNum });
    },
    [pagination]
  );

  const filterList = () => {

    if (!userName && !userAge) {
      setUserList(originalList);
      return;
    }

    let usersFiltered = [];

    if (userName && userAge) {
      usersFiltered = originalList.filter(
        ({ name, age }) =>
          name.toLowerCase().includes(userName.toLowerCase()) &&
          age === +userAge
      );
    } else if (userName && !userAge) {
      usersFiltered = originalList.filter(({ name }) =>
        name.toLowerCase().includes(userName.toLowerCase())
      );
    } else {
      usersFiltered = originalList.filter(({ age }) => age === +userAge);
    }

    setUserList(usersFiltered);
  };

  const userNotFoundLabel = () => {
    if (userName && !userAge) {
      return `Nenhum usuário encontrado para a busca: <strong>${userName}</strong>.`;
    }

    if (!userName && userAge) {
      return `Nenhum usuário encontrado para a busca: <strong>${userAge}</strong> anos.`;
    }

    return `Nenhum usuário encontrado para a busca: <strong>${userName}</strong> com <strong>${userAge}</strong> anos.`;
  };

  return (
    <>
      <center>
        <Title id="page-title">{t('home.title')}:</Title>
      </center>
      {!isLoading ? (
        <>
          <ContainerCenter>
            <form>
              <TextField
                id="field-name"
                label={t('home.name')}
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <TextField
                type='number'
                id="field-age"
                label={t('home.age')}
                value={userAge}
                onChange={(event) => setUserAge(event.target.value)}
              />

              <ButtonSeven label={t('home.filter')} onClick={filterList} />
            </form>
          </ContainerCenter>

          <Container>
          {currentUsers.length > 0 ? (
            <>
              {currentUsers.map((user, index) => (
                <Card
                  name={user.name}
                  age={user.age}
                  key={index}
                />
              ))}
            </>
          ) : (
            <>
              <center>
                {userNotFoundLabel()}
              </center>
            </>
          )}
          </Container>
        </>
      ) : (
        <ContainerCenter>
          <CircularProgress />
        </ContainerCenter>
      )}

      {currentUsers.length > 0 && (
        <ContainerCenter>
            <Pagination
              currentPage={currentPage}
              usersPerPage={usersPerPage}
              totalUsers={userList.length}
              handlePageChange={handlePaginate}
            />
        </ContainerCenter>
      )}
    </>
  )
}

export default Home;
