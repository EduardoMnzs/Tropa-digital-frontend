import React, { useState } from 'react';
import { HomePageContainer, MainContent } from '../Home/Home.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../components/Sidebar/Sidebar.styles';
import { Search, Plus, EllipsisVertical } from 'lucide-react';

import {
  EventsPageContainer,
  EventsHeaderSection,
  WelcomeMessage,
  UserName,
  PageTitle,
  EventsCardWrapper,
  CardContent,
  SearchAndActionButtonContainer,
  SearchInputWrapper,
  SearchIcon,
  StyledInput,
  InsertNewButton,
  TableContainer,
  StyledTable,
  StatusIndicator,
  PaginationContainer,
  PaginationButton,
  HamburgerWrapper
} from './Events.styles';

const Events = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dados de exemplo para os eventos vindo do backend
  const eventsData = [
    {
      id: 1,
      name: 'Clube do Laço Coração Pantaneiro',
      teams: 10,
      status: 'Ativo',
      date: '09 a 11 de Junho',
    },
    {
      id: 2,
      name: 'Torneio de Vôlei de Praia - Verão',
      teams: 10,
      status: 'Ativo',
      date: '15 a 17 de Julho',
    },
  ];

  return (
    <HomePageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <EventsPageContainer>
          <EventsHeaderSection>
            <WelcomeMessage>Bem vindo de volta, <UserName>Kaique Steck</UserName></WelcomeMessage>
            <PageTitle>Todos eventos</PageTitle>
          </EventsHeaderSection>

          <EventsCardWrapper>
            <CardContent>
              <SearchAndActionButtonContainer>
                <SearchInputWrapper>
                  <SearchIcon as={Search} />
                  <StyledInput placeholder="Buscar eventos" />
                </SearchInputWrapper>
                <InsertNewButton>
                  <Plus size={16} />
                  Inserir novo
                </InsertNewButton>
              </SearchAndActionButtonContainer>

              <TableContainer>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Nome do evento</th>
                      <th>Total de equipes</th>
                      <th>Status</th>
                      <th>Data</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventsData.map(event => (
                      <tr key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.teams}</td>
                        <td>
                          <div>
                            <StatusIndicator style={{ backgroundColor: event.status === 'Ativo' ? '#22C55E' : '#9CA3AF' }} />
                            <span>{event.status}</span>
                          </div>
                        </td>
                        <td>{event.date}</td>
                        <td>
                          <button type="button">
                            <EllipsisVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </TableContainer>

              <PaginationContainer>
                <PaginationButton>Anterior</PaginationButton>
                <PaginationButton className="page-number active">1</PaginationButton>
                <PaginationButton className="page-number">2</PaginationButton>
                <PaginationButton className="page-number">3</PaginationButton>
                <PaginationButton
                  style={{
                    backgroundColor: '#F97316',
                    color: '#FFFFFF',
                    borderColor: '#F97316'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
                >
                  Próxima
                </PaginationButton>
              </PaginationContainer>
            </CardContent>
          </EventsCardWrapper>
        </EventsPageContainer>
      </MainContent>
    </HomePageContainer>
  );
};

export default Events;