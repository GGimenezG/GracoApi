CREATE PROCEDURE `types_of_operations_get_web`(
	IN iId INT
)
BEGIN
	-- Declaramos variables a usar
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    
		IF iId = 0 THEN
			SELECT tp.idTypesOfOperations as id, tp.name
			FROM typesofoperations tp 
			WHERE tp.status = 'A';

		ELSE
			SELECT tp.idTypesOfOperations as id, tp.name
			FROM typesofoperations tp 
			WHERE tp.status = 'A' AND tp.idTypesOfOperations = iId;
		END IF;
    
    SET oRes = 1;
	SET oMessage = 'Get data successfully';
    SELECT oRes as success, oMessage as message;
END