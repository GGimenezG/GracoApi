CREATE PROCEDURE `communes_get_web`(
	IN iId INT
)
BEGIN

    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
         
	IF iId = 0 THEN
		SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
		/*INTO @selectdata*/
		FROM communes c 
		WHERE c.status = 'A';
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	ELSE
		SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
		/*INTO @selectdata*/
		FROM communes c 
		WHERE c.status = 'A' AND c.idCommunes = iId;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END