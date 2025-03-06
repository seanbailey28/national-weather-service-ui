import * as React from "react";
import { WeatherAlertsTableProps } from "./WeatherAlertsTable.types";
import { Modal, Table, Title, Text, Flex } from "@mantine/core";
import WeatherAlertsSeverityTag from "@/components/WeatherAlertsSeverityTag/WeatherAlertsSeverityTag";
import { convertDateTime } from "@/utils/date-time-format/date-time-formatter";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export const WeatherAlertsTable = ({ items }: WeatherAlertsTableProps) => {
  const [selectedAlertId, setSelectedAlertId] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const handleRowClick = (alertId?: string) => {
    if (!alertId) {
      return;
    }

    setSelectedAlertId(alertId);
    open();
  };

  useEffect(() => {
    if (!opened) {
      setSelectedAlertId(null);
    }
  }, [opened]);

  const selectedItem = items.find((item) => item.id === selectedAlertId);

  const rows = items.map((item) => (
    <Table.Tr
      key={item.id}
      onClick={() => handleRowClick(item.id)}
      styles={{ tr: { cursor: "pointer" } }}
    >
      <Table.Td>{convertDateTime(item.effective)}</Table.Td>
      <Table.Td>{convertDateTime(item.expires)}</Table.Td>
      <Table.Td>{item.headline}</Table.Td>
      <Table.Td>{item.areaDesc}</Table.Td>
      <Table.Td>
        <WeatherAlertsSeverityTag severity={item.severity} />
      </Table.Td>
      <Table.Td>{item.instruction}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Effective</Table.Th>
            <Table.Th>Expires</Table.Th>
            <Table.Th>Headline</Table.Th>
            <Table.Th>Area Description</Table.Th>
            <Table.Th>Severity</Table.Th>
            <Table.Th>Instruction</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Modal opened={opened} onClose={close} centered>
        <Flex direction="column" gap="lg">
          <Title>{selectedItem?.headline}</Title>
          <Text size="md">{selectedItem?.description}</Text>
        </Flex>
      </Modal>
    </>
  );
};

export default WeatherAlertsTable;
